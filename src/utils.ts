// Conditionally import crypto only in Node.js environments
let crypto: typeof import("crypto") | null = null;
let timingSafeEqual: typeof import("crypto").timingSafeEqual | null = null;

try {
    if (typeof process !== "undefined" && process.versions && process.versions.node) {
        crypto = require("crypto");
        timingSafeEqual = require("crypto").timingSafeEqual;
    }
} catch (error) {
    throw new Error("Crypto is not available in this environment");
}

/**
 * Custom error class for webhook verification failures
 */
export class WebhookVerificationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "WebhookVerificationError";
    }
}

/**
 * Configuration options for webhook verification
 */
export interface WebhookVerificationOptions {
    /** Maximum age of the webhook in seconds (default: 300 = 5 minutes) */
    tolerance?: number;
}

/**
 * Interface for extracted signature components
 */
interface SignatureComponents {
    timestamp: string | null;
    signatures: string[];
}

/**
 * Verify Terra webhook signature using HMAC-SHA256.
 *
 * @param payload - The raw JSON payload from the request body
 * @param signatureHeader - The 'terra-signature' header value
 * @param signingSecret - The webhook endpoint's signing secret
 * @param options - Configuration options including tolerance
 * @returns True if signature is valid and within tolerance
 * @throws WebhookVerificationError if verification fails
 */
export function verifyTerraWebhookSignature(
    payload: string,
    signatureHeader: string,
    signingSecret: string,
    options: WebhookVerificationOptions = {},
): boolean {
    if (!crypto || !timingSafeEqual) {
        throw new WebhookVerificationError("Webhook verification is only supported in Node.js environments");
    }

    const { tolerance = 300 } = options;

    if (!payload || !signatureHeader || !signingSecret) {
        throw new WebhookVerificationError("Missing required parameters");
    }

    const { timestamp, signatures } = extractTimestampAndSignatures(signatureHeader);

    if (!timestamp) {
        throw new WebhookVerificationError("No timestamp found in signature header");
    }

    if (signatures.length === 0) {
        throw new WebhookVerificationError("No v1 signatures found in signature header");
    }

    const signedPayload = `${timestamp}.${payload}`;

    const expectedSignature = computeSignature(signedPayload, signingSecret);

    verifySignatures(signatures, expectedSignature);
    verifyTimestamp(timestamp, tolerance);

    return true;
}

/**
 * Extract timestamp and v1 signatures from the terra-signature header.
 */
function extractTimestampAndSignatures(signatureHeader: string): SignatureComponents {
    let timestamp: string | null = null;
    const signatures: string[] = [];

    const elements = signatureHeader.split(",");

    for (const element of elements) {
        const trimmedElement = element.trim();
        if (!trimmedElement.includes("=")) {
            continue;
        }

        const [prefix, ...valueParts] = trimmedElement.split("=");
        const trimmedPrefix = prefix.trim();
        const value = valueParts.join("=").trim();

        if (trimmedPrefix === "t") {
            timestamp = value;
        } else if (trimmedPrefix === "v1") {
            signatures.push(value);
        }
    }

    return { timestamp, signatures };
}

/**
 * Compute HMAC-SHA256 signature for the signed payload.
 */
function computeSignature(signedPayload: string, signingSecret: string): string {
    if (!crypto) {
        throw new WebhookVerificationError("Crypto not available in this environment");
    }
    return crypto.createHmac("sha256", signingSecret).update(signedPayload, "utf8").digest("hex");
}

/**
 * Verify that at least one received signature matches the expected signature.
 * Uses Node.js built-in timingSafeEqual for constant-time comparison to prevent timing attacks.
 */
function verifySignatures(receivedSignatures: string[], expectedSignature: string): void {
    if (!timingSafeEqual) {
        throw new WebhookVerificationError("Timing-safe comparison not available in this environment");
    }

    const expectedBuffer = Buffer.from(expectedSignature, "hex");

    for (const signature of receivedSignatures) {
        try {
            const signatureBuffer = Buffer.from(signature, "hex");

            if (expectedBuffer.length === signatureBuffer.length && timingSafeEqual(expectedBuffer, signatureBuffer)) {
                return;
            }
        } catch (error) {
            // Invalid hex string, continue to next signature
            continue;
        }
    }

    throw new WebhookVerificationError("No matching signature found");
}

/**
 * Verify that the timestamp is within the acceptable tolerance.
 */
function verifyTimestamp(timestampStr: string, tolerance: number): void {
    const webhookTimestamp = parseInt(timestampStr, 10);

    if (isNaN(webhookTimestamp)) {
        throw new WebhookVerificationError("Invalid timestamp format");
    }

    const currentTimestamp = Math.floor(Date.now() / 1000);
    const age = currentTimestamp - webhookTimestamp;

    if (age > tolerance) {
        throw new WebhookVerificationError(`Webhook timestamp too old: ${age}s > ${tolerance}s tolerance`);
    }

    if (age < -tolerance) {
        throw new WebhookVerificationError(
            `Webhook timestamp too far in future: ${Math.abs(age)}s > ${tolerance}s tolerance`,
        );
    }
}

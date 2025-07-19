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
 * @returns A Promise resolving to true if the signature is valid
 * @throws WebhookVerificationError if verification fails
 */
export async function verifyTerraWebhookSignature(
    payload: string,
    signatureHeader: string,
    signingSecret: string,
    options: WebhookVerificationOptions = {},
): Promise<boolean> {
    let crypto: typeof import("crypto");
    try {
        crypto = await import("crypto");
    } catch (error) {
        throw new WebhookVerificationError(
            "Webhook verification requires the Node.js 'crypto' module, which could not be loaded.",
        );
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

    // Pass the crypto module to the helper function
    const expectedSignature = computeSignature(signedPayload, signingSecret, crypto);

    // Pass the timingSafeEqual function to the helper function
    verifySignatures(signatures, expectedSignature, crypto.timingSafeEqual);
    verifyTimestamp(timestamp, tolerance);

    return true;
}

/**
 * Extract timestamp and v1 signatures from the terra-signature header.
 */
function extractTimestampAndSignatures(signatureHeader: string): SignatureComponents {
    let timestamp: string | null = null;
    const signatures: string[] = [];

    for (const element of signatureHeader.split(",")) {
        const trimmedElement = element.trim();
        if (!trimmedElement.includes("=")) {
            continue;
        }

        const [prefix, ...valueParts] = trimmedElement.split("=");
        const value = valueParts.join("=").trim();

        if (prefix.trim() === "t") {
            timestamp = value;
        } else if (prefix.trim() === "v1") {
            signatures.push(value);
        }
    }

    return { timestamp, signatures };
}

/**
 * Compute HMAC-SHA256 signature for the signed payload.
 * @param signedPayload - The signed payload
 * @param signingSecret - The webhook endpoint's signing secret
 * @param crypto - Node.js crypto module
 */
function computeSignature(signedPayload: string, signingSecret: string, crypto: typeof import("crypto")): string {
    return crypto.createHmac("sha256", signingSecret).update(signedPayload, "utf8").digest("hex");
}

/**
 * Verify signatures using a timing-safe comparison.
 * @param receivedSignatures - The received signatures
 * @param expectedSignature - The expected signature
 * @param timingSafeEqual - The crypto.timingSafeEqual function
 */
function verifySignatures(
    receivedSignatures: string[],
    expectedSignature: string,
    timingSafeEqual: typeof import("crypto").timingSafeEqual,
): void {
    const expectedBuffer = Buffer.from(expectedSignature, "hex");

    for (const signature of receivedSignatures) {
        try {
            const signatureBuffer = Buffer.from(signature, "hex");
            if (expectedBuffer.length === signatureBuffer.length && timingSafeEqual(expectedBuffer, signatureBuffer)) {
                return; // Signature is valid
            }
        } catch (error) {
            // Invalid hex string
            console.error("Invalid hex string", error);
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

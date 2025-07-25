/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Terra from "../index.js";

/**
 * Authentication error event
 */
export interface AuthErrorEvent extends Terra.AuthEvent {
    /** User who attempted to authenticate */
    user: Terra.TerraUser;
    /** Provider information */
    provider: string;
    /** Error message */
    message: string;
    /** Reason for the error */
    reason: string;
    /** Client-provided reference ID */
    reference_id: string;
    /** Widget session identifier */
    widget_session_id: string;
}

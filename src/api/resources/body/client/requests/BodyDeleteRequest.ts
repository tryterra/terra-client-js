/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         user_id: "user_id"
 *     }
 */
export interface BodyDeleteRequest {
    /**
     * Terra user ID (UUID format) to retrieve data for
     */
    user_id: string;
    /** List of identifiers for body metrics entries to be deleted */
    log_ids?: string[];
}

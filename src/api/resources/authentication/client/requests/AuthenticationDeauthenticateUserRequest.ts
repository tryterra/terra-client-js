/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         user_id: "user_id"
 *     }
 */
export interface AuthenticationDeauthenticateUserRequest {
    /**
     * Terra user ID (UUID format) to deauthenticate and remove from Terra system
     */
    user_id: string;
}

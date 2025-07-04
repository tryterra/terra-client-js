/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface AuthenticationAuthenticateUserResponse {
    /** indicates that the request was successful */
    status?: AuthenticationAuthenticateUserResponse.Status;
    /** User ID for the user being created */
    user_id?: string;
    /** authentication URL the user must be redirected to in order to link their account */
    auth_url?: string;
}

export namespace AuthenticationAuthenticateUserResponse {
    /**
     * indicates that the request was successful
     */
    export type Status = "success" | "error";
    export const Status = {
        Success: "success",
        Error: "error",
    } as const;
}

/**
 * Hydration amount sample. See https://docs.tryterra.co/reference/health-and-fitness-api/data-models (Body.hydration_data)
 */
export interface HydrationAmountSample {
    /** Time with which the record is associated, in ISO8601 format */
    timestamp?: string;
    /** Hydration amount (e.g. volume in ml or device-specific unit) */
    amount_ml?: number;
}

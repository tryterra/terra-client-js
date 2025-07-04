/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface AsleepDurations {
    /** Total duration for which the user was asleep, in any state. */
    duration_asleep_state_seconds?: number;
    /** Total duration for which the user was in a state of deep sleep. */
    duration_deep_sleep_state_seconds?: number;
    /** Total duration for which the user was in a state of light sleep. */
    duration_light_sleep_state_seconds?: number;
    /** Total duration for which the user was in a state of REM sleep. */
    duration_REM_sleep_state_seconds?: number;
    /** Number of periods of REM sleep captured during the sleep session. */
    num_REM_events?: number;
}

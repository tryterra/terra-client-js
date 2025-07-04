/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Terra from "../index.js";

export interface StressData {
    /** Average stress level for the day. */
    avg_stress_level?: number;
    /** Total number of seconds spent in a stressed state while active during the day. */
    activity_stress_duration_seconds?: number;
    /** Total number of seconds spent in a state of low stress during the day. */
    low_stress_duration_seconds?: number;
    /** Maximum stress level recorded during the day. */
    max_stress_level?: number;
    /** Total number of seconds spent in a state of medium stress during the day. */
    medium_stress_duration_seconds?: number;
    /** Array of stress level data points sampled throughout the day. */
    samples?: Terra.StressSample[];
    /** Total number of seconds spent in a stressed state while at rest during the day. */
    rest_stress_duration_seconds?: number;
    /** Total number of seconds spent in a state of high stress during the day. */
    high_stress_duration_seconds?: number;
    /** Total number of seconds spent in a stressed state while at rest during the day. */
    stress_duration_seconds?: number;
    /** Stress rating for the day. */
    stress_rating?: Terra.High;
    /** Array of Body Battery data points sampled throughout the day. */
    body_battery_samples?: Terra.BodyBatterySample[];
}

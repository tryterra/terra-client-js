/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SpeedPlannedWorkoutStepTarget {
    /** Type of target for the workout - i.e. metric type for which a criterion must be met for the workout to be completed */
    target_type?: SpeedPlannedWorkoutStepTarget.TargetType;
    /** Maximum speed threshold for the workout step - i.e. the user is to stay under this value during the workout step */
    speed_percentage_high?: number;
    /** Minimum speed threshold for the workout step - i.e. the user is to stay above this value during the workout step */
    speed_percentage_low?: number;
    /** Ideal percentage of user's Threshold Speed, based off their Threshold Pace, to be maintained workout step. Usually, the Threshold Pace is defined as the pace one could race at for 50 to 60 minutes */
    speed_percentage?: number;
    /** Ideal speed value to be maintained for the workout step */
    speed_meters_per_second?: number;
}

export namespace SpeedPlannedWorkoutStepTarget {
    /**
     * Type of target for the workout - i.e. metric type for which a criterion must be met for the workout to be completed
     */
    export type TargetType =
        | "SPEED"
        | "HEART_RATE"
        | "OPEN"
        | "CADENCE"
        | "POWER"
        | "GRADE"
        | "RESISTANCE"
        | "POWER_LAP"
        | "SWIM_STROKE"
        | "SPEED_LAP"
        | "HEART_RATE_LAP"
        | "PACE"
        | "HEART_RATE_THRESHOLD_PERCENTAGE"
        | "HEART_RATE_MAX_PERCENTAGE"
        | "SPEED_PERCENTAGE"
        | "POWER_PERCENTAGE"
        | "REPETITION"
        | "TSS"
        | "IF";
    export const TargetType = {
        Speed: "SPEED",
        HeartRate: "HEART_RATE",
        Open: "OPEN",
        Cadence: "CADENCE",
        Power: "POWER",
        Grade: "GRADE",
        Resistance: "RESISTANCE",
        PowerLap: "POWER_LAP",
        SwimStroke: "SWIM_STROKE",
        SpeedLap: "SPEED_LAP",
        HeartRateLap: "HEART_RATE_LAP",
        Pace: "PACE",
        HeartRateThresholdPercentage: "HEART_RATE_THRESHOLD_PERCENTAGE",
        HeartRateMaxPercentage: "HEART_RATE_MAX_PERCENTAGE",
        SpeedPercentage: "SPEED_PERCENTAGE",
        PowerPercentage: "POWER_PERCENTAGE",
        Repetition: "REPETITION",
        Tss: "TSS",
        If: "IF",
    } as const;
}

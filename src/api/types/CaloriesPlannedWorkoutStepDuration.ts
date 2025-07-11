/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CaloriesPlannedWorkoutStepDuration {
    /** Calorie burn target for the workout step - once the user reaches the target, the step will be completed */
    calories?: number;
    /** Type of condition that must be fulfilled to consider the workout step complete */
    duration_type?: CaloriesPlannedWorkoutStepDuration.DurationType;
}

export namespace CaloriesPlannedWorkoutStepDuration {
    /**
     * Type of condition that must be fulfilled to consider the workout step complete
     */
    export type DurationType =
        | "TIME"
        | "DISTANCE_METERS"
        | "HR_LESS_THAN"
        | "HR_GREATER_THAN"
        | "CALORIES"
        | "OPEN"
        | "POWER_LESS_THAN"
        | "POWER_GREATER_THAN"
        | "REPETITION_TIME"
        | "REPS"
        | "FIXED_REST"
        | "TIME_AT_VALID_CDA"
        | "STEPS";
    export const DurationType = {
        Time: "TIME",
        DistanceMeters: "DISTANCE_METERS",
        HrLessThan: "HR_LESS_THAN",
        HrGreaterThan: "HR_GREATER_THAN",
        Calories: "CALORIES",
        Open: "OPEN",
        PowerLessThan: "POWER_LESS_THAN",
        PowerGreaterThan: "POWER_GREATER_THAN",
        RepetitionTime: "REPETITION_TIME",
        Reps: "REPS",
        FixedRest: "FIXED_REST",
        TimeAtValidCda: "TIME_AT_VALID_CDA",
        Steps: "STEPS",
    } as const;
}

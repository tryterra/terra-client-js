/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Terra from "../index.js";

export interface CardioPlannedWorkoutStep {
    /** List of targets for the workout */
    targets?: Terra.PlannedWorkoutStepTarget[];
    /** Planned intensity for the workout step */
    intensity?: number;
    /** Position of the workout step in the overall workout */
    order?: number;
    /** Name of exercise to be performed for the workout step */
    exercise_name?: string;
    /** Description of workout step */
    description?: string;
    /** List of conditions to be fulfilled for the workout step to be completed - all of the conditions must be completed */
    durations?: Terra.PlannedWorkoutStepDuration[];
    /** Type of exercise to be performed for the workout step */
    exercise_category?: CardioPlannedWorkoutStep.ExerciseCategory;
    /** Name of workout step */
    name?: string;
}

export namespace CardioPlannedWorkoutStep {
    /**
     * Type of exercise to be performed for the workout step
     */
    export type ExerciseCategory =
        | "UNKNOWN"
        | "BENCH_PRESS"
        | "CALF_RAISE"
        | "CARDIO"
        | "CARRY"
        | "CHOP"
        | "CORE"
        | "CRUNCH"
        | "CURL"
        | "DEADLIFT"
        | "FLYE"
        | "HIP_RAISE"
        | "HIP_STABILITY"
        | "HIP_SWING"
        | "HYPEREXTENSION"
        | "LATERAL_RAISE"
        | "LEG_CURL"
        | "LEG_RAISE"
        | "LUNGE"
        | "OLYMPIC_LIFT"
        | "PLANK"
        | "PLYO"
        | "PULL_UP"
        | "PUSH_UP"
        | "ROW"
        | "SHOULDER_PRESS"
        | "SHOULDER_STABILITY"
        | "SHRUG"
        | "SIT_UP"
        | "SQUAT"
        | "TOTAL_BODY"
        | "TRICEPS_EXTENSION"
        | "WARM_UP"
        | "RUN"
        | "BIKE"
        | "CARDIO_SENSORS";
    export const ExerciseCategory = {
        Unknown: "UNKNOWN",
        BenchPress: "BENCH_PRESS",
        CalfRaise: "CALF_RAISE",
        Cardio: "CARDIO",
        Carry: "CARRY",
        Chop: "CHOP",
        Core: "CORE",
        Crunch: "CRUNCH",
        Curl: "CURL",
        Deadlift: "DEADLIFT",
        Flye: "FLYE",
        HipRaise: "HIP_RAISE",
        HipStability: "HIP_STABILITY",
        HipSwing: "HIP_SWING",
        Hyperextension: "HYPEREXTENSION",
        LateralRaise: "LATERAL_RAISE",
        LegCurl: "LEG_CURL",
        LegRaise: "LEG_RAISE",
        Lunge: "LUNGE",
        OlympicLift: "OLYMPIC_LIFT",
        Plank: "PLANK",
        Plyo: "PLYO",
        PullUp: "PULL_UP",
        PushUp: "PUSH_UP",
        Row: "ROW",
        ShoulderPress: "SHOULDER_PRESS",
        ShoulderStability: "SHOULDER_STABILITY",
        Shrug: "SHRUG",
        SitUp: "SIT_UP",
        Squat: "SQUAT",
        TotalBody: "TOTAL_BODY",
        TricepsExtension: "TRICEPS_EXTENSION",
        WarmUp: "WARM_UP",
        Run: "RUN",
        Bike: "BIKE",
        CardioSensors: "CARDIO_SENSORS",
    } as const;
}

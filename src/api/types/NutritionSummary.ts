/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Terra from "../index.js";

export interface NutritionSummary {
    /** Summary of macronutrient information for a given day. */
    macros?: Terra.NutritionMacros;
    /** Summary of micronutrient information for a given day. */
    micros?: Terra.NutritionMicros;
    /** Water consumption of the user for a given day. */
    water_ml?: number;
    /** Non-water drink consumption of the user for a given day. */
    drink_ml?: number;
}

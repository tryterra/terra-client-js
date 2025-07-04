/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Terra from "../index.js";

/**
 * Nutrition data event
 */
export interface NutritionEvent {
    type: "nutrition";
    /** Array of nutrition data */
    data: Terra.Nutrition[];
    /** User whose data is being provided */
    user: Terra.TerraUser;
    /** API version */
    version: string;
}

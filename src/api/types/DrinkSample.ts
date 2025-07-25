/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface DrinkSample {
    /** Time with which the record is associated, in ISO8601 format with microsecond precision. TimeZone info will be provided whenever possible. If absent, the time corresponds to the user's local time */
    timestamp?: string;
    /** Volume of drink consumed */
    drink_volume?: number;
    /** Unit of measurement for the drink */
    drink_unit?: string;
    /** Name of drink consumed. */
    drink_name?: string;
}

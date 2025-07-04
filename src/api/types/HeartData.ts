/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Terra from "../index.js";

export interface HeartData {
    /** List of Atrial Fibrillation classification measurements sampled through the day. */
    afib_classification_samples?: Terra.AFibClassificationSample[];
    /** List of ECGReadings sampled through the day. */
    ecg_signal?: Terra.EcgReading[];
    /** Object containing heart rate data. */
    heart_rate_data?: Terra.HeartRateData;
    /** List of Pulse Wave Velocity measurements sampled throughout the day. This represents a measurement of arterial stiffness that is an independent predictor of cardiovascular risk. */
    pulse_wave_velocity_samples?: Terra.PulseVelocitySample[];
    /** List of RR Interval samples throughout the day. */
    rr_interval_samples?: Terra.RrIntervalSample[];
}

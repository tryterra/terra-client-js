import { AFibClassificationSample } from "./samples/AFibClassificationSample";
import { BloodPressureSample } from "./samples/BloodPressureSample";
import { GlucoseDataSample } from "./samples/GlucoseDataSample";
import { HeartRateDataSample } from "./samples/HeartRateDataSample";
import { HeartRateVariabilityDataSampleRMSSD } from "./samples/HeartRateVariabilityDataSampleRMSSD";
import { HeartRateVariabilityDataSampleSDNN } from "./samples/HeartRateVariabilityDataSampleSDNN";
import { HydrationLevelSample } from "./samples/HydrationLevelSample";
import { HydrationMeasurementSample } from "./samples/HydrationMeasurementSample";
import { MeasurementDataSample } from "./samples/MeasurementDataSample";
import { OtherDeviceData } from "./samples/OtherDeviceData";
import { OxygenSaturationSample } from "./samples/OxygenSaturationSample";
import { PulseVelocitySample } from "./samples/PulseVelocitySample";
import { TemperatureSample } from "./samples/TemperatureSample";
import { Vo2MaxSample } from "./samples/Vo2MaxSample";

export interface Body {
  oxygen_data: {
    saturation_samples: Array<OxygenSaturationSample>;
    avg_saturation_percentage: number;
    vo2_samples: Array<Vo2MaxSample>;
    vo2max_ml_per_min_per_kg: number;
  };
  metadata: {
    end_time: string;
    start_time: string;
  };
  hydration_data: {
    hydration_amount_samples: Array<HydrationLevelSample>;
    hydration_level_samples: Array<HydrationMeasurementSample>;
    day_total_water_consumption_ml: number;
  };
  device_data: {
    name: string;
    other_devices: Array<OtherDeviceData>;
    hardware_version: string;
    manufacturer: string;
    software_version: string;
    activation_timestamp: string;
    serial_number: string;
  };
  blood_pressure_data: {
    blood_pressure_samples: Array<BloodPressureSample>;
  };
  temperature_data: {
    body_temperature_samples: Array<TemperatureSample>;
    ambient_temperature_samples: Array<TemperatureSample>;
    skin_temperature_samples: Array<TemperatureSample>;
  };
  measurements_data: {
    measurements: Array<MeasurementDataSample>;
  };
  heart_data: {
    afib_classification_samples: Array<AFibClassificationSample>;
    heart_rate_data: {
      summary: {
        max_hr_bpm: number;
        resting_hr_bpm: number;
        avg_hrv_rmssd: number;
        min_hr_bpm: number;
        user_max_hr_bpm: number;
        avg_hrv_sdnn: number;
        avg_hr_bpm: number;
      };
      detailed: {
        hr_samples: Array<HeartRateDataSample>;
        hrv_samples_sdnn: Array<HeartRateVariabilityDataSampleSDNN>;
        hrv_samples_rmssd: Array<HeartRateVariabilityDataSampleRMSSD>;
      };
    };
    pulse_wave_velocity_samples: Array<PulseVelocitySample>;
  };
  glucose_data: {
    blood_glucose_samples: Array<GlucoseDataSample>;
    day_avg_blood_glucose_mg_per_dL: number;
  };
}

import { UploadType } from "./enums/UploadType";
import { Nullable } from "./helpers/typings";
import { ActivityLevelSample } from "./samples/ActivityLevelSample";
import { DistanceSample } from "./samples/DistanceSample";
import { ElevationSample } from "./samples/ElevationSample";
import { HeartRateDataSample } from "./samples/HeartRateDataSample";
import { HeartRateVariabilityDataSampleRMSSD } from "./samples/HeartRateVariabilityDataSampleRMSSD";
import { HeartRateVariabilityDataSampleSDNN } from "./samples/HeartRateVariabilityDataSampleSDNN";
import { METSample } from "./samples/METSample";
import { OtherDeviceData } from "./samples/OtherDeviceData";
import { OxygenSaturationSample } from "./samples/OxygenSaturationSample";
import { StepSample } from "./samples/StepSample";
import { StressSample } from "./samples/StressSample";
import { Vo2MaxSample } from "./samples/Vo2MaxSample";

export interface Daily {
  oxygen_data: {
    saturation_samples: Array<OxygenSaturationSample>;
    avg_saturation_percentage: Nullable<number>;
    vo2_samples: Array<Vo2MaxSample>;
    vo2max_ml_per_min_per_kg: Nullable<number>;
  };
  metadata: {
    end_time: string;
    start_time: string;
    upload_type: UploadType;
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
  distance_data: {
    swimming: {
      num_strokes: Nullable<number>;
      num_laps: Nullable<number>;
      pool_length_meters: Nullable<number>;
    };
    floors_climbed: Nullable<number>;
    elevation: {
      loss_actual_meters: Nullable<number>;
      min_meters: Nullable<number>;
      avg_meters: Nullable<number>;
      gain_actual_meters: Nullable<number>;
      max_meters: Nullable<number>;
      gain_planned_meters: Nullable<number>;
    };
    steps: Nullable<number>;
    detailed: {
      step_samples: Array<StepSample>;
      distance_samples: Array<DistanceSample>;
      elevation_samples: Array<ElevationSample>;
    };
    distance_meters: Nullable<number>;
  };
  MET_data: {
    MET_samples: Array<METSample>;
    num_low_intensity_minutes: Nullable<number>;
    num_high_intensity_minutes: Nullable<number>;
    num_inactive_minutes: Nullable<number>;
    num_moderate_intensity_minutes: Nullable<number>;
    avg_level: Nullable<number>;
  };
  calories_data: {
    net_intake_calories: Nullable<number>;
    BMR_calories: Nullable<number>;
    total_burned_calories: Nullable<number>;
    net_activity_calories: Nullable<number>;
  };
  heart_rate_data: {
    summary: {
      max_hr_bpm: Nullable<number>;
      resting_hr_bpm: Nullable<number>;
      avg_hrv_rmssd: Nullable<number>;
      min_hr_bpm: Nullable<number>;
      user_max_hr_bpm: Nullable<number>;
      avg_hrv_sdnn: Nullable<number>;
      avg_hr_bpm: Nullable<number>;
    };
    detailed: {
      hr_samples: Array<HeartRateDataSample>;
      hrv_samples_sdnn: Array<HeartRateVariabilityDataSampleSDNN>;
      hrv_samples_rmssd: Array<HeartRateVariabilityDataSampleRMSSD>;
    };
  };
  active_durations_data: {
    activity_seconds: Nullable<number>;
    rest_seconds: Nullable<number>;
    low_intensity_seconds: Nullable<number>;
    activity_levels_samples: Array<ActivityLevelSample>;
    vigorous_intensity_seconds: Nullable<number>;
    num_continuous_inactive_periods: Nullable<number>;
    inactivity_seconds: Nullable<number>;
    moderate_intensity_seconds: Nullable<number>;
  };
  stress_data: {
    rest_stress_duration_seconds: Nullable<number>;
    stress_duration_seconds: Nullable<number>;
    activity_stress_duration_seconds: Nullable<number>;
    avg_stress_level: Nullable<number>;
    low_stress_duration_seconds: Nullable<number>;
    medium_stress_duration_seconds: Nullable<number>;
    samples: Array<StressSample>;
    high_stress_duration_seconds: Nullable<number>;
    max_stress_level: Nullable<number>;
  };
}

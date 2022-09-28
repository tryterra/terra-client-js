import { UploadType } from "./enums/UploadType";
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
type Some<T> = T;
type None = null;
export type Nothing = null | undefined;

export type Option<T> = Some<T> | None;
export interface Daily {
  oxygen_data: {
    saturation_samples: Array<OxygenSaturationSample>;
    avg_saturation_percentage?: Option<number>;
    vo2_samples: Array<Vo2MaxSample>;
    vo2max_ml_per_min_per_kg?: Option<number>;
  };
  metadata: {
    end_time: string;
    start_time: string;
    upload_type?: UploadType;
  };
  device_data: {
    name?: string;
    other_devices: Array<OtherDeviceData>;
    hardware_version?: string;
    manufacturer?: string;
    software_version?: string;
    activation_timestamp?: string;
    serial_number?: string;
  };
  distance_data: {
    swimming?: {
      num_strokes?: Option<number>;
      num_laps?: Option<number>;
      pool_length_meters?: Option<number>;
    };
    floors_climbed?: Option<number>;
    elevation?: {
      loss_actual_meters?: Option<number>;
      min_meters?: Option<number>;
      avg_meters?: Option<number>;
      gain_actual_meters?: Option<number>;
      max_meters?: Option<number>;
      gain_planned_meters?: Option<number>;
    };
    steps?: Option<number>;
    detailed?: {
      step_samples: Array<StepSample>;
      distance_samples: Array<DistanceSample>;
      elevation_samples: Array<ElevationSample>;
    };
    distance_meters?: Option<number>;
  };
  MET_data: {
    MET_samples: Array<METSample>;
    num_low_intensity_minutes?: Option<number>;
    num_high_intensity_minutes?: Option<number>;
    num_inactive_minutes?: Option<number>;
    num_moderate_intensity_minutes?: Option<number>;
    avg_level?: Option<number>;
  };
  calories_data: {
    net_intake_calories?: Option<number>;
    BMR_calories?: Option<number>;
    total_burned_calories?: Option<number>;
    net_activity_calories?: Option<number>;
  };
  heart_rate_data: {
    summary: {
      max_hr_bpm?: Option<number>;
      resting_hr_bpm?: Option<number>;
      avg_hrv_rmssd?: Option<number>;
      min_hr_bpm?: Option<number>;
      user_max_hr_bpm?: Option<number>;
      avg_hrv_sdnn?: Option<number>;
      avg_hr_bpm?: Option<number>;
    };
    detailed: {
      hr_samples: Array<HeartRateDataSample>;
      hrv_samples_sdnn: Array<HeartRateVariabilityDataSampleSDNN>;
      hrv_samples_rmssd: Array<HeartRateVariabilityDataSampleRMSSD>;
    };
  };
  active_durations_data: {
    activity_seconds?: Option<number>;
    rest_seconds?: Option<number>;
    low_intensity_seconds?: Option<number>;
    activity_levels_samples: Array<ActivityLevelSample>;
    vigorous_intensity_seconds?: Option<number>;
    num_continuous_inactive_periods?: Option<number>;
    inactivity_seconds?: Option<number>;
    moderate_intensity_seconds?: Option<number>;
  };
  stress_data: {
    rest_stress_duration_seconds?: Option<number>;
    stress_duration_seconds?: Option<number>;
    activity_stress_duration_seconds?: Option<number>;
    avg_stress_level?: Option<number>;
    low_stress_duration_seconds?: Option<number>;
    medium_stress_duration_seconds?: Option<number>;
    samples: Array<StressSample>;
    high_stress_duration_seconds?: Option<number>;
    max_stress_level?: Option<number>;
  };
}

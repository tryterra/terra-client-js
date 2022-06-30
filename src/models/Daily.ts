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

export interface Daily {
  oxygen_data: {
    saturation_samples: Array<OxygenSaturationSample>;
    avg_saturation_percentage: number;
    vo2_samples: Array<Vo2MaxSample>;
    vo2max_ml_per_min_per_kg: number;
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
      num_strokes: number;
      num_laps: number;
      pool_length_meters: number;
    };
    floors_climbed: number;
    elevation: {
      loss_actual_meters: number;
      min_meters: number;
      avg_meters: number;
      gain_actual_meters: number;
      max_meters: number;
      gain_planned_meters: number;
    };
    steps: number;
    detailed: {
      step_samples: Array<StepSample>;
      distance_samples: Array<DistanceSample>;
      elevation_samples: Array<ElevationSample>;
    };
    distance_meters: number;
  };
  MET_data: {
    MET_samples: Array<METSample>;
    num_low_intensity_minutes: number;
    num_high_intensity_minutes: number;
    num_inactive_minutes: number;
    num_moderate_intensity_minutes: number;
    avg_level: number;
  };
  calories_data: {
    net_intake_calories: number;
    BMR_calories: number;
    total_burned_calories: number;
    net_activity_calories: number;
  };
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
  active_durations_data: {
    activity_seconds: number;
    rest_seconds: number;
    low_intensity_seconds: number;
    activity_levels_samples: Array<ActivityLevelSample>;
    vigorous_intensity_seconds: number;
    num_continuous_inactive_periods: number;
    inactivity_seconds: number;
    moderate_intensity_seconds: number;
  };
  stress_data: {
    rest_stress_duration_seconds: number;
    stress_duration_seconds: number;
    activity_stress_duration_seconds: number;
    avg_stress_level: number;
    low_stress_duration_seconds: number;
    medium_stress_duration_seconds: number;
    samples: Array<StressSample>;
    high_stress_duration_seconds: number;
    max_stress_level: number;
  };
}

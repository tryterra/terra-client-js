import { ActivityLevelSample } from "./ActivityLevelSample";
import { HRSample } from "./HRSample";
import { HRVSample } from "./HRVSample";
import { METSample } from "./METSample";
import { StressSample } from "./StressSample";

export interface Daily {
  stress_data: {
    medium_stress_duration: number;
    low_stress_duration: number;
    avg_stress_level: number;
    activity_stress_duration: number;
    rest_stress_duration: number;
    stress_duration: number;
    max_stress_level: number;
    high_stress_duration: number;
    samples: Array<StressSample>;
  };
  MET_data: {
    num_moderate_intensity_minutes: number;
    num_low_intensity_minutes: number;
    avg_level: number;
    samples: Array<METSample>;
    num_high_intensity_minutes: number;
    num_inactive_minutes: number;
  };
  heart_rate_data: {
    summary: {
      user_hr_max: number;
      min_hr: number;
      avg_hr_variability: number;
      avg_hr: number;
      resting_hr: number;
      max_hr: number;
    };
    detailed: {
      hrv_samples: Array<HRVSample>;
      hr_samples: Array<HRSample>;
    };
  };
  active_durations_data: {
    activity_seconds: number;
    low_intensity_seconds: number;
    rest_seconds: number;
    num_continuous_inactive_periods: number;
    inactivity_seconds: number;
    activity_levels_samples: Array<ActivityLevelSample>;
    moderate_intensity_seconds: number;
    vigorous_intensity_seconds: number;
  };
  metadata: {
    start_time: String;
    end_time: String;
  };
  device_data: {
    software_version: String;
    manufacturer: String;
    serial_number: String;
    name: String;
    hardware_version: String;
  };
  distance_data: {
    floors_climbed: number;
    swimming: {
      pool_length_metres: number;
      num_laps: number;
      num_strokes: number;
    };
    elevation: {
      gain_actual_metres: number;
      avg_metres: number;
      loss_actual_metres: number;
      max_metres: number;
      gain_planned_metres: number;
      min_metres: number;
    };
    distance_metres: number;
    steps: number;
  };
  calories_data: {
    net_intake_calories: number;
    net_activity_calories: number;
    BMR_calories: number;
    total_burned_calories: number;
  };
}

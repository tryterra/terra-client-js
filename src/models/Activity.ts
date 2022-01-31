import { ActivityLevelSample } from "./ActivityLevelSample";
import { ActivityType } from "./ActivityType";
import { CadenceSample } from "./CadenceSample";
import { DistanceSample } from "./DistanceSample";
import { ElevationSample } from "./ElevationSample";
import { HRSample } from "./HRSample";
import { HRVSample } from "./HRVSample";
import { METSample } from "./METSample";
import { OtherDeviceData } from "./OtherDeviceData";
import { OxygenSaturationSample } from "./OxygenSaturationSample";
import { PositionSample } from "./PositionSample";
import { PowerSample } from "./PowerSample";
import { TSSSample } from "./TSSSample";
import { UploadType } from "./UploadType";

export interface Activity {
  oxygen_data: {
    saturation_percentage: number;
    max_volume_ml_per_min_per_kg: number;
    saturation_samples: Array<OxygenSaturationSample>;
  };
  energy_data: {
    energy_kilojoules: number;
    energy_planned_kilojoules: number;
  };
  strain_data: {
    strain_level: number;
  };
  power_data: {
    avg_watts: number;
    power_samples: Array<PowerSample>;
    max_watts: number;
  };
  MET_data: {
    num_moderate_intensity_minutes: number;
    num_low_intensity_minutes: number;
    avg_level: number;
    samples: Array<METSample>;
    num_high_intensity_minutes: number;
    num_inactive_minutes: number;
  };
  polyline_map_data: {
    summary_polyline: String;
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
  movement_data: {
    normalized_speed_metres_per_second: number;
    avg_torque_newton_metres: number;
    avg_pace_minutes_per_kilometre: number;
    max_pace_minutes_per_kilometre: number;
    max_speed_metres_per_second: number;
    avg_cadence: number;
    max_cadence: number;
    avg_velocity_metres_per_second: number;
    max_torque_newton_metres: number;
    avg_speed_metres_per_second: number;
    max_velocity_metres_per_second: number;
    cadence_samples: Array<CadenceSample>;
  };
  metadata: {
    city: String;
    type: ActivityType;
    end_time: String;
    start_time: String;
    country: String;
    name: String;
    summary_id: String;
    upload_type: UploadType;
    state: String;
  };
  TSS_data: {
    samples: Array<TSSSample>;
  };
  device_data: {
    software_version: String;
    manufacturer: String;
    serial_number: String;
    name: String;
    hardware_version: String;
    other_devices: Array<OtherDeviceData>;
  };
  work_data: {
    work_in_kilojoules: number;
  };
  distance_data: {
    summary: {
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
    detailed: {
      elevation_samples: Array<ElevationSample>;
      distance_samples: Array<DistanceSample>;
    };
  };
  calories_data: {
    net_intake_calories: number;
    net_activity_calories: number;
    BMR_calories: number;
    total_burned_calories: number;
  };
  position_data: {
    start_pos_lat_lng?: [number, number];
    position_samples: Array<PositionSample>;
    centre_pos_lat_lng?: [number, number];
    end_pos_lat_lng?: [number, number];
  };
}

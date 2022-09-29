import { ActivityType } from "./enums/ActivityType";
import { UploadType } from "./enums/UploadType";
import { Nullable } from "./helpers/typings";
import { ActivityLevelSample } from "./samples/ActivityLevelSample";
import { CadenceSample } from "./samples/CadenceSample";
import { DistanceSample } from "./samples/DistanceSample";
import { ElevationSample } from "./samples/ElevationSample";
import { HeartRateDataSample } from "./samples/HeartRateDataSample";
import { HeartRateVariabilityDataSampleRMSSD } from "./samples/HeartRateVariabilityDataSampleRMSSD";
import { HeartRateVariabilityDataSampleSDNN } from "./samples/HeartRateVariabilityDataSampleSDNN";
import { LapSample } from "./samples/LapSample";
import { METSample } from "./samples/METSample";
import { OtherDeviceData } from "./samples/OtherDeviceData";
import { OxygenSaturationSample } from "./samples/OxygenSaturationSample";
import { PositionSample } from "./samples/PositionSample";
import { PowerSample } from "./samples/PowerSample";
import { SpeedSample } from "./samples/SpeedSample";
import { TSSSample } from "./samples/TSSSample";
import { Vo2MaxSample } from "./samples/Vo2MaxSample";

export interface Activity {
  movement_data: {
    normalized_speed_meters_per_second: Nullable<number>;
    max_cadence_rpm: Nullable<number>;
    avg_speed_meters_per_second: Nullable<number>;
    avg_pace_minutes_per_kilometer: Nullable<number>;
    max_velocity_meters_per_second: Nullable<number>;
    max_pace_minutes_per_kilometer: Nullable<number>;
    max_torque_newton_meters: Nullable<number>;
    avg_cadence_rpm: Nullable<number>;
    avg_velocity_meters_per_second: Nullable<number>;
    avg_torque_newton_meters: Nullable<number>;
    cadence_samples: Array<CadenceSample>;
    speed_samples: Array<SpeedSample>;
    max_speed_meters_per_second: Nullable<number>;
  };
  power_data: {
    max_watts: Nullable<number>;
    avg_watts: Nullable<number>;
    power_samples: Array<PowerSample>;
  };
  position_data: {
    position_samples: Array<PositionSample>;
    centre_pos_lat_lng_deg: [number, number];
    start_pos_lat_lng_deg: [number, number];
    end_pos_lat_lng_deg: [number, number];
  };
  oxygen_data: {
    saturation_samples: Array<OxygenSaturationSample>;
    avg_saturation_percentage: Nullable<number>;
    vo2_samples: Array<Vo2MaxSample>;
    vo2max_ml_per_min_per_kg: Nullable<number>;
  };
  metadata: {
    name: Nullable<string>;
    summary_id: Nullable<string>;
    country: Nullable<string>;
    state: Nullable<string>;
    upload_type: UploadType;
    end_time: string;
    city: Nullable<string>;
    type: Nullable<ActivityType>;
    start_time: string;
  };
  TSS_data: {
    TSS_samples: Array<TSSSample>;
  };
  device_data: {
    name: Nullable<string>;
    other_devices: Array<OtherDeviceData>;
    hardware_version: Nullable<string>;
    manufacturer: Nullable<string>;
    software_version: Nullable<string>;
    activation_timestamp: Nullable<string>;
    serial_number: Nullable<string>;
  };
  distance_data: {
    summary: {
      swimming: {
        num_strokes: Nullable<number>;
        num_laps: Nullable<number>;
        pool_length_meters: Nullable<number>;
      };
      floors_climbed: number;
      elevation: {
        loss_actual_meters: Nullable<number>;
        min_meters: Nullable<number>;
        avg_meters: Nullable<number>;
        gain_actual_meters: Nullable<number>;
        max_meters: Nullable<number>;
        gain_planned_meters: Nullable<number>;
      };
      steps: Nullable<number>;
      distance_meters: Nullable<number>;
    };
    detailed: {
      distance_samples: Array<DistanceSample>;
      elevation_samples: Array<ElevationSample>;
    };
  };
  calories_data: {
    net_intake_calories: Nullable<number>;
    BMR_calories: Nullable<number>;
    total_burned_calories: Nullable<number>;
    net_activity_calories: Nullable<number>;
  };
  lap_data: {
    laps: Array<LapSample>;
  };
  MET_data: {
    MET_samples: Array<METSample>;
    num_low_intensity_minutes: Nullable<number>;
    num_high_intensity_minutes: Nullable<number>;
    num_inactive_minutes: Nullable<number>;
    num_moderate_intensity_minutes: Nullable<number>;
    avg_level: Nullable<number>;
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
  polyline_map_data: {
    summary_polyline: Nullable<string>;
  };
  strain_data: {
    strain_level: Nullable<number>;
  };
  work_data: {
    work_kilojoules: Nullable<number>;
  };
  energy_data: {
    energy_kilojoules: Nullable<number>;
    energy_planned_kilojoules: Nullable<number>;
  };
}

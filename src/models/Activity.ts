import { ActivityType } from "./enums/ActivityType";
import { UploadType } from "./enums/UploadType";
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
    normalized_speed_meters_per_second?: number;
    max_cadence_rpm?: number;
    avg_speed_meters_per_second?: number;
    avg_pace_minutes_per_kilometer?: number;
    max_velocity_meters_per_second?: number;
    max_pace_minutes_per_kilometer?: number;
    max_torque_newton_meters?: number;
    avg_cadence_rpm?: number;
    avg_velocity_meters_per_second?: number;
    avg_torque_newton_meters?: number;
    cadence_samples: Array<CadenceSample>;
    speed_samples: Array<SpeedSample>;
    max_speed_meters_per_second?: number;
  };
  power_data: {
    max_watts?: number;
    avg_watts?: number;
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
    avg_saturation_percentage?: number;
    vo2_samples: Array<Vo2MaxSample>;
    vo2max_ml_per_min_per_kg?: number;
  };
  metadata: {
    name?: string;
    summary_id?: string;
    country?: string;
    state?: string;
    upload_type: UploadType;
    end_time: string;
    city?: string;
    type?: ActivityType;
    start_time: string;
  };
  TSS_data: {
    TSS_samples: Array<TSSSample>;
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
    summary: {
      swimming: {
        num_strokes?: number;
        num_laps?: number;
        pool_length_meters?: number;
      };
      floors_climbed: number;
      elevation: {
        loss_actual_meters?: number;
        min_meters?: number;
        avg_meters?: number;
        gain_actual_meters?: number;
        max_meters?: number;
        gain_planned_meters?: number;
      };
      steps?: number;
      distance_meters?: number;
    };
    detailed: {
      distance_samples: Array<DistanceSample>;
      elevation_samples: Array<ElevationSample>;
    };
  };
  calories_data: {
    net_intake_calories?: number;
    BMR_calories?: number;
    total_burned_calories?: number;
    net_activity_calories?: number;
  };
  lap_data: {
    laps: Array<LapSample>;
  };
  MET_data: {
    MET_samples: Array<METSample>;
    num_low_intensity_minutes?: number;
    num_high_intensity_minutes?: number;
    num_inactive_minutes?: number;
    num_moderate_intensity_minutes?: number;
    avg_level?: number;
  };
  heart_rate_data: {
    summary: {
      max_hr_bpm?: number;
      resting_hr_bpm?: number;
      avg_hrv_rmssd?: number;
      min_hr_bpm?: number;
      user_max_hr_bpm?: number;
      avg_hrv_sdnn?: number;
      avg_hr_bpm?: number;
    };
    detailed: {
      hr_samples: Array<HeartRateDataSample>;
      hrv_samples_sdnn: Array<HeartRateVariabilityDataSampleSDNN>;
      hrv_samples_rmssd: Array<HeartRateVariabilityDataSampleRMSSD>;
    };
  };
  active_durations_data: {
    activity_seconds?: number;
    rest_seconds?: number;
    low_intensity_seconds?: number;
    activity_levels_samples: Array<ActivityLevelSample>;
    vigorous_intensity_seconds?: number;
    num_continuous_inactive_periods?: number;
    inactivity_seconds?: number;
    moderate_intensity_seconds?: number;
  };
  polyline_map_data: {
    summary_polyline?: string;
  };
  strain_data: {
    strain_level?: number;
  };
  work_data: {
    work_kilojoules?: number;
  };
  energy_data: {
    energy_kilojoules?: number;
    energy_planned_kilojoules?: number;
  };
}

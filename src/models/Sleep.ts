import { RecoveryLevel } from "./enums/RecoveryLevel";
import { SleepUploadType } from "./enums/SleepUploadType";
import { Nullable } from "./helpers/typings";
import { BreathSample } from "./samples/BreathSample";
import { HeartRateDataSample } from "./samples/HeartRateDataSample";
import { HeartRateVariabilityDataSampleRMSSD } from "./samples/HeartRateVariabilityDataSampleRMSSD";
import { HeartRateVariabilityDataSampleSDNN } from "./samples/HeartRateVariabilityDataSampleSDNN";
import { OxygenSaturationSample } from "./samples/OxygenSaturationSample";
import { SleepHypnogramSample } from "./samples/SleepHypnogramSample";
import { SnoringSample } from "./samples/SnoringSample";

export interface Sleep {
  sleep_durations_data: {
    other: {
      duration_in_bed_seconds: Nullable<number>;
      duration_unmeasurable_sleep_seconds: Nullable<number>;
    };
    sleep_efficiency: Nullable<number>;
    hypnogram_samples: Array<SleepHypnogramSample>;
    awake: {
      duration_short_interruption_seconds: Nullable<number>;
      duration_awake_state_seconds: Nullable<number>;
      duration_long_interruption_seconds: Nullable<number>;
      num_wakeup_events: Nullable<number>;
      wake_up_latency_seconds: Nullable<number>;
      num_out_of_bed_events: Nullable<number>;
      sleep_latency_seconds: Nullable<number>;
    };
    asleep: {
      duration_light_sleep_state_seconds: Nullable<number>;
      duration_asleep_state_seconds: Nullable<number>;
      num_REM_events: Nullable<number>;
      duration_REM_sleep_state_seconds: Nullable<number>;
      duration_deep_sleep_state_seconds: Nullable<number>;
    };
  };
  metadata: {
    end_time: string;
    start_time: string;
    upload_type: Nullable<SleepUploadType>;
  };
  heart_rate_data: {
    summary: {
      max_hr_bpm: Nullable<number>;
      avg_hrv_rmssd: Nullable<number>;
      min_hr_bpm: Nullable<number>;
      user_max_hr_bpm: Nullable<number>;
      avg_hr_bpm: Nullable<number>;
      avg_hrv_sdnn: Nullable<number>;
    };
    detailed: {
      hr_samples: Array<HeartRateDataSample>;
      hrv_samples_sdnn: Array<HeartRateVariabilityDataSampleSDNN>;
      hrv_samples_rmssd: Array<HeartRateVariabilityDataSampleRMSSD>;
    };
  };
  temperature_data: {
    delta: Nullable<number>;
  };
  readiness_data: {
    readiness: Nullable<number>;
    recovery_level: Nullable<RecoveryLevel>;
  };
  respiration_data: {
    breaths_data: {
      min_breaths_per_min: Nullable<number>;
      avg_breaths_per_min: Nullable<number>;
      max_breaths_per_min: Nullable<number>;
      on_demand_reading: Nullable<Boolean>;
      end_time: Nullable<string>;
      samples: Array<BreathSample>;
      start_time: Nullable<string>;
    };
    snoring_data: {
      num_snoring_events: Nullable<number>;
      total_snoring_duration_seconds: Nullable<number>;
      end_time: Nullable<string>;
      samples: Array<SnoringSample>;
      start_time: Nullable<string>;
    };
    oxygen_saturation_data: {
      start_time: Nullable<string>;
      end_time: Nullable<string>;
      samples: Array<OxygenSaturationSample>;
    };
  };
}

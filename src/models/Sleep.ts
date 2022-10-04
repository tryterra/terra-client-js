import { RecoveryLevel } from "./enums/RecoveryLevel";
import { SleepUploadType } from "./enums/SleepUploadType";
import { Option } from "./helpers/typings";
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
      duration_in_bed_seconds: Option<number>;
      duration_unmeasurable_sleep_seconds: Option<number>;
    };
    sleep_efficiency: Option<number>;
    hypnogram_samples: Array<SleepHypnogramSample>;
    awake: {
      duration_short_interruption_seconds: Option<number>;
      duration_awake_state_seconds: Option<number>;
      duration_long_interruption_seconds: Option<number>;
      num_wakeup_events: Option<number>;
      wake_up_latency_seconds: Option<number>;
      num_out_of_bed_events: Option<number>;
      sleep_latency_seconds: Option<number>;
    };
    asleep: {
      duration_light_sleep_state_seconds: Option<number>;
      duration_asleep_state_seconds: Option<number>;
      num_REM_events: Option<number>;
      duration_REM_sleep_state_seconds: Option<number>;
      duration_deep_sleep_state_seconds: Option<number>;
    };
  };
  metadata: {
    end_time: string;
    start_time: string;
    upload_type: Option<SleepUploadType>;
  };
  heart_rate_data: {
    summary: {
      max_hr_bpm: Option<number>;
      avg_hrv_rmssd: Option<number>;
      min_hr_bpm: Option<number>;
      user_max_hr_bpm: Option<number>;
      avg_hr_bpm: Option<number>;
      avg_hrv_sdnn: Option<number>;
    };
    detailed: {
      hr_samples: Array<HeartRateDataSample>;
      hrv_samples_sdnn: Array<HeartRateVariabilityDataSampleSDNN>;
      hrv_samples_rmssd: Array<HeartRateVariabilityDataSampleRMSSD>;
    };
  };
  temperature_data: {
    delta: Option<number>;
  };
  readiness_data: {
    readiness: Option<number>;
    recovery_level: Option<RecoveryLevel>;
  };
  respiration_data: {
    breaths_data: {
      min_breaths_per_min: Option<number>;
      avg_breaths_per_min: Option<number>;
      max_breaths_per_min: Option<number>;
      on_demand_reading: Option<Boolean>;
      end_time: Option<string>;
      samples: Array<BreathSample>;
      start_time: Option<string>;
    };
    snoring_data: {
      num_snoring_events: Option<number>;
      total_snoring_duration_seconds: Option<number>;
      end_time: Option<string>;
      samples: Array<SnoringSample>;
      start_time: Option<string>;
    };
    oxygen_saturation_data: {
      start_time: Option<string>;
      end_time: Option<string>;
      samples: Array<OxygenSaturationSample>;
    };
  };
}

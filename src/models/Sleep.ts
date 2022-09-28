import { RecoveryLevel } from "./enums/RecoveryLevel";
import { SleepUploadType } from "./enums/SleepUploadType";
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
      duration_in_bed_seconds?: number;
      duration_unmeasurable_sleep_seconds?: number;
    };
    sleep_efficiency?: number;
    hypnogram_samples: Array<SleepHypnogramSample>;
    awake: {
      duration_short_interruption_seconds?: number;
      duration_awake_state_seconds?: number;
      duration_long_interruption_seconds?: number;
      num_wakeup_events?: number;
      wake_up_latency_seconds?: number;
      num_out_of_bed_events?: number;
      sleep_latency_seconds?: number;
    };
    asleep: {
      duration_light_sleep_state_seconds?: number;
      duration_asleep_state_seconds?: number;
      num_REM_events?: number;
      duration_REM_sleep_state_seconds?: number;
      duration_deep_sleep_state_seconds?: number;
    };
  };
  metadata: {
    end_time: string;
    start_time: string;
    upload_type?: SleepUploadType;
  };
  heart_rate_data: {
    summary: {
      max_hr_bpm?: number;
      avg_hrv_rmssd?: number;
      min_hr_bpm?: number;
      user_max_hr_bpm?: number;
      avg_hr_bpm?: number;
      avg_hrv_sdnn?: number;
    };
    detailed: {
      hr_samples: Array<HeartRateDataSample>;
      hrv_samples_sdnn: Array<HeartRateVariabilityDataSampleSDNN>;
      hrv_samples_rmssd: Array<HeartRateVariabilityDataSampleRMSSD>;
    };
  };
  temperature_data: {
    delta?: number;
  };
  readiness_data: {
    readiness?: number;
    recovery_level?: RecoveryLevel;
  };
  respiration_data: {
    breaths_data: {
      min_breaths_per_min?: number;
      avg_breaths_per_min?: number;
      max_breaths_per_min?: number;
      on_demand_reading?: Boolean;
      end_time?: string;
      samples: Array<BreathSample>;
      start_time?: string;
    };
    snoring_data: {
      num_snoring_events?: number;
      total_snoring_duration_seconds?: number;
      end_time?: string;
      samples: Array<SnoringSample>;
      start_time?: string;
    };
    oxygen_saturation_data: {
      start_time?: string;
      end_time?: string;
      samples: Array<OxygenSaturationSample>;
    };
  };
}

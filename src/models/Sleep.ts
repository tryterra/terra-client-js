import { BreathSample } from "./BreathSample";
import { HRSample } from "./HRSample";
import { HRVSample } from "./HRVSample";
import { HypnogramSample } from "./HypnogramSample";
import { SnoringSample } from "./SnoringSample";
import { SPO2Sample } from "./SPO2Sample";

export interface Sleep {
  heart_rate_data: {
    summary: {
      user_hr_max: number;
      min_hr: number;
      avg_hr_variability: number;
      avg_hr: number;
      max_hr: number;
    };
    detailed: {
      hrv_samples: Array<HRVSample>;
      hr_samples: Array<HRSample>;
    };
  };
  respiration_data: {
    breaths_data: {
      samples: Array<BreathSample>;
      end_time: String;
      start_time: String;
      max_breaths_per_min: number;
      min_breaths_per_min: number;
      avg_breaths_per_min: number;
      on_demand_reading: Boolean;
    };
    oxygen_saturation_data: {
      samples: Array<SPO2Sample>;
      end_time: String;
      start_time: String;
      on_demand_reading: Boolean;
    };
    snoring_data: {
      num_snoring_events: number;
      samples: Array<SnoringSample>;
      end_time: String;
      start_time: String;
      total_snoring_duration: number;
    };
  };
  metadata: {
    sleep_efficiency: number;
    end_time: String;
    start_time: String;
    sleep_duration_planned: number;
  };
  sleep_durations_data: {
    awake: {
      num_out_of_bed_events: number;
      num_wakeup_events: number;
      duration_after_wakeup: number;
      waso: number;
      duration_before_sleeping: number;
      duration_long_interruption: number;
      duration_awake_state: number;
      duration_short_interruption: number;
    };
    other: {
      duration_unmeasurable_sleep: number;
      duration_in_bed: number;
    };
    hypnogram_samples: Array<HypnogramSample>;
    asleep: {
      duration_deep_sleep_state: number;
      duration_REM_sleep_state: number;
      duration_asleep_state: number;
      num_REM_events: number;
      duration_light_sleep_state: number;
    };
  };
  temperature_data: {
    delta: number;
  };
}

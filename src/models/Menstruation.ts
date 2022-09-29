import { Nullable } from "./helpers/typings";

export interface Menstruation {
  metadata: {
    end_time: string;
    start_time: string;
  };
  menstruation_data: {
    period_length_days: Nullable<number>;
    current_phase: Nullable<number>;
    length_of_current_phase_days: Nullable<number>;
    days_until_next_phase: Nullable<number>;
    period_start_date: Nullable<string>;
    predicted_cycle_length_days: Nullable<number>;
    day_in_cycle: Nullable<number>;
    last_updated_time: Nullable<string>;
    cycle_length_days: Nullable<number>;
    is_predicted_cycle: Nullable<string>;
  };
}

import { Option } from './helpers/typings';

export interface Menstruation {
  metadata: {
    end_time: string;
    start_time: string;
  };
  menstruation_data: {
    period_length_days: Option<number>;
    current_phase: Option<number>;
    length_of_current_phase_days: Option<number>;
    days_until_next_phase: Option<number>;
    period_start_date: Option<string>;
    predicted_cycle_length_days: Option<number>;
    day_in_cycle: Option<number>;
    last_updated_time: Option<string>;
    cycle_length_days: Option<number>;
    is_predicted_cycle: Option<string>;
  };
}

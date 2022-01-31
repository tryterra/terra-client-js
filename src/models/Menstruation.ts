export interface Menstruation {
  period_start_date: String;
  day_in_cycle: number;
  period_length_in_days: number;
  current_phase: number;
  length_of_current_phase_in_day: number;
  days_until_next_phase: number;
  predicted_cycle_length_in_days: number;
  is_predicted_cycle: String;
  cycle_length_in_days: number;
  last_updated_time: String;
}

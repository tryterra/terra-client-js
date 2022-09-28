export interface Menstruation {
  metadata: {
    end_time: string;
    start_time: string;
  };
  menstruation_data: {
    period_length_days?: number;
    current_phase?: number;
    length_of_current_phase_days?: number;
    days_until_next_phase?: number;
    period_start_date?: string;
    predicted_cycle_length_days?: number;
    day_in_cycle?: number;
    last_updated_time?: string;
    cycle_length_days?: number;
    is_predicted_cycle?: string;
  };
}

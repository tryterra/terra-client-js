import { Option } from '../helpers/typings';

export interface CalorieSample {
  timestamp: string;
  calories: number;
  timer_duration_seconds: Option<number>;
}

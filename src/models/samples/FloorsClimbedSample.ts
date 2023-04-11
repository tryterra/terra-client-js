import { Option } from '../helpers/typings';

export interface FloorsClimbedSample {
  timestamp: string;
  floors_climbed: number;
  timer_duration_seconds: Option<number>;
}

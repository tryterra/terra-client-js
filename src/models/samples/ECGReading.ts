import { AFibFlag } from '../enums/AFibFlag';
import { RawECGSample } from './RawECGSample';
import { Option } from '../helpers/typings';

export interface ECGreading {
  start_timestamp: string;
  avg_hr_bpm: Option<number>;
  afib_classification: AFibFlag;
  raw_signal: Array<RawECGSample>;
}

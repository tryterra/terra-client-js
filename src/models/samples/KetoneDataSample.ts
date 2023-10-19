import { KetoneSampleType } from '../enums/KetoneSampleType';
import { Option } from '../helpers/typings';

export interface KetoneDataSample {
  timestamp: string;
  ketone_mg_per_dL: Option<number>;
  sample_type: Option<KetoneSampleType>;
}

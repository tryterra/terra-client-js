import { AFibFlag } from '../enums/AFibFlag';

export interface AFibClassificationSample {
  timestamp: string;
  afib_classification: AFibFlag;
}

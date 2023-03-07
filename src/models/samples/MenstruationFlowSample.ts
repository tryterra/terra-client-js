import { MenstruationFlow } from '../enums/MenstruationFlow';

export interface MenstruationFlowSample {
  timestamp: string;
  flow: MenstruationFlow;
}

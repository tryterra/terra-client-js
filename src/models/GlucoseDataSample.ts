import { GlucoseFlag } from "./GlucoseFlag";

export interface GlucoseDataSample {
  timestamp: String;
  blood_glucose_mg_per_dL: number;
  glucose_level_flag: GlucoseFlag;
}

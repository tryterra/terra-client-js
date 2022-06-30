import { SleepLevel } from "../enums/SleepLevel";

export interface SleepHypnogramSample {
  timestamp: string;
  level: SleepLevel;
}

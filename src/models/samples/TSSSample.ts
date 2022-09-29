import { Nullable } from "../helpers/typings";

export interface TSSSample {
  planned: number;
  actual: number;
  method: string;
  intensity_factor_planned: Nullable<number>;
  intensity_factor_actual: Nullable<number>;
  normalized_power_watts: Nullable<number>;
}

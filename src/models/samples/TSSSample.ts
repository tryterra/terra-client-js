export interface TSSSample {
  planned: number;
  actual: number;
  method: string;
  intensity_factor_planned?: number;
  intensity_factor_actual?: number;
  normalized_power_watts?: number;
}

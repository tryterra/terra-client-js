import { Nullable } from "../helpers/typings";

export interface MeasurementDataSample {
  measurement_time: string;
  BMI: Nullable<number>;
  BMR: Nullable<number>;
  RMR: Nullable<number>;
  estimated_fitness_age: Nullable<number>;
  skin_fold_mm: Nullable<number>;
  bodyfat_percentage: Nullable<number>;
  weight_kg: Nullable<number>;
  height_cm: Nullable<number>;
  bone_mass_kg: Nullable<number>;
  muscle_mass_kg: Nullable<number>;
  lean_mass_kg: Nullable<number>;
  water_percentage: Nullable<number>;
  insulin_units: Nullable<number>;
  insulin_type: Nullable<string>;
  urine_color: Nullable<string>;
}

import { Option } from '../helpers/typings';

export interface MeasurementDataSample {
  measurement_time: string;
  BMI: Option<number>;
  BMR: Option<number>;
  RMR: Option<number>;
  estimated_fitness_age: Option<number>;
  skin_fold_mm: Option<number>;
  bodyfat_percentage: Option<number>;
  weight_kg: Option<number>;
  height_cm: Option<number>;
  bone_mass_kg: Option<number>;
  muscle_mass_kg: Option<number>;
  lean_mass_kg: Option<number>;
  water_percentage: Option<number>;
  insulin_units: Option<number>;
  insulin_type: Option<string>;
  urine_color: Option<string>;
}

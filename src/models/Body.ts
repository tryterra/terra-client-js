import { AFibFlag } from "./AFibFlag";
import { GlucoseDataSample } from "./GlucoseDataSample";
import { OxygenSaturationSample } from "./OxygenSaturationSample";

export interface Body {
  oxygen_data: {
    saturation_percentage: number;
    max_volume_ml_per_min_per_kg: number;
    saturation_samples: Array<OxygenSaturationSample>;
  };
  insulin_data: {
    insulin_units: number;
    insulin_type: String;
    day_avg_blood_glucose_mg_per_dL: number;
    blood_glucose_samples: Array<GlucoseDataSample>;
    urine_colour: String;
  };
  metadata: {
    start_time: String;
  };
  heart_data: {
    pulse_wave_velocity_metres_per_second: number;
    pulse_bpm: number;
    hr_variability: number;
    afib_classification: AFibFlag;
  };
  blood_pressure_data: {
    systolic_bp: number;
    diastolic_bp: number;
  };
  hydration_data: {
    hydration_level: String;
    hydration_kg: number;
    water_consumption_ml: number;
  };
  temperature_data: {
    temperature_celsius: number;
    skin_temperature_celsius: number;
    body_temperature_celsius: number;
  };
  measurements_data: {
    fat_percentage: number;
    BMI: number;
    muscle_mass_g: number;
    skin_fold_mm: number;
    BMR: number;
    height_cm: number;
    estimated_fitness_age: number;
    bone_mass_g: number;
    water_percentage: number;
    RMR: number;
    weight_kg: number;
  };
}

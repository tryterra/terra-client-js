import { Option } from './helpers/typings';
import { Meal } from './samples/Meal';

export interface Nutrition {
  metadata: {
    end_time: string;
    start_time: string;
  };
  summary: {
    macros: {
      fat_g: Option<number>;
      trans_fat_g: Option<number>;
      fiber_g: Option<number>;
      carbohydrates_g: Option<number>;
      protein_g: Option<number>;
      cholesterol_mg: Option<number>;
      sodium_mg: Option<number>;
      calories: number;
      sugar_g: Option<number>;
      alcohol_g: Option<number>;
    };
    micros: {
      selenium_mg: Option<number>;
      niacin_mg: Option<number>;
      magnesium_mg: Option<number>;
      copper_mg: Option<number>;
      vitamin_B12_mg: Option<number>;
      vitamin_B6_mg: Option<number>;
      vitamin_C_mg: Option<number>;
      zinc_mg: Option<number>;
      vitamin_E_mg: Option<number>;
      manganese_mg: Option<number>;
      vitamin_D_mg: Option<number>;
      iodine_mg: Option<number>;
      chloride_mg: Option<number>;
      folate_mg: Option<number>;
      calcium_mg: Option<number>;
      molybdenum_mg: Option<number>;
      vitamin_A_mg: Option<number>;
      riboflavin_mg: Option<number>;
      folic_acid_mg: Option<number>;
      iron_mg: Option<number>;
      thiamin_mg: Option<number>;
      pantothenic_acid_mg: Option<number>;
      caffeine_mg: Option<number>;
      vitamin_K_mg: Option<number>;
      chromium_mg: Option<number>;
      potassium_mg: Option<number>;
      biotin_mg: Option<number>;
      phosphorus_mg: Option<number>;
    };
    water_ml: Option<number>;
  };
  meals: Array<Meal>;
}

import { Nullable } from "./helpers/typings";
import { Meal } from "./samples/Meal";

export interface Nutrition {
  metadata: {
    end_time: string;
    start_time: string;
  };
  summary: {
    macros: {
      fat_g: Nullable<number>;
      trans_fat_g: Nullable<number>;
      fiber_g: Nullable<number>;
      carbohydrates_g: Nullable<number>;
      protein_g: Nullable<number>;
      cholesterol_mg: Nullable<number>;
      sodium_mg: Nullable<number>;
      calories: number;
      sugar_g: Nullable<number>;
      alcohol_g: Nullable<number>;
    };
    micros: {
      selenium_mg: Nullable<number>;
      niacin_mg: Nullable<number>;
      magnesium_mg: Nullable<number>;
      copper_mg: Nullable<number>;
      vitamin_B12_mg: Nullable<number>;
      vitamin_B6_mg: Nullable<number>;
      vitamin_C_mg: Nullable<number>;
      zinc_mg: Nullable<number>;
      vitamin_E_mg: Nullable<number>;
      manganese_mg: Nullable<number>;
      vitamin_D_mg: Nullable<number>;
      iodine_mg: Nullable<number>;
      chloride_mg: Nullable<number>;
      folate_mg: Nullable<number>;
      calcium_mg: Nullable<number>;
      molybdenum_mg: Nullable<number>;
      vitamin_A_mg: Nullable<number>;
      riboflavin_mg: Nullable<number>;
      folic_acid_mg: Nullable<number>;
      iron_mg: Nullable<number>;
      thiamin_mg: Nullable<number>;
      pantothenic_acid_mg: Nullable<number>;
      caffeine_mg: Nullable<number>;
      vitamin_K_mg: Nullable<number>;
      chromium_mg: Nullable<number>;
      potassium_mg: Nullable<number>;
      biotin_mg: Nullable<number>;
      phosphorus_mg: Nullable<number>;
    };
    water_ml: Nullable<number>;
  };
  meals: Array<Meal>;
}

import { Meal } from "./samples/Meal";

export interface Nutrition {
  metadata: {
    end_time: string;
    start_time: string;
  };
  summary: {
    macros: {
      fat_g: number;
      trans_fat_g: number;
      fiber_g: number;
      carbohydrates_g: number;
      protein_g: number;
      cholesterol_mg: number;
      sodium_mg: number;
      calories: number;
      sugar_g: number;
      alcohol_g: number;
    };
    micros: {
      selenium_mg: number;
      niacin_mg: number;
      magnesium_mg: number;
      copper_mg: number;
      vitamin_B12_mg: number;
      vitamin_B6_mg: number;
      vitamin_C_mg: number;
      zinc_mg: number;
      vitamin_E_mg: number;
      manganese_mg: number;
      vitamin_D_mg: number;
      iodine_mg: number;
      chloride_mg: number;
      folate_mg: number;
      calcium_mg: number;
      molybdenum_mg: number;
      vitamin_A_mg: number;
      riboflavin_mg: number;
      folic_acid_mg: number;
      iron_mg: number;
      thiamin_mg: number;
      pantothenic_acid_mg: number;
      caffeine_mg: number;
      vitamin_K_mg: number;
      chromium_mg: number;
      potassium_mg: number;
      biotin_mg: number;
      phosphorus_mg: number;
    };
    water_ml: number;
  };
  meals: Array<Meal>;
}

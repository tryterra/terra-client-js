import { Nullable } from "./helpers/typings";

export interface Athlete {
  age: Nullable<number>;
  country: Nullable<string>;
  bio: Nullable<string>;
  state: Nullable<string>;
  last_name: Nullable<string>;
  sex: Nullable<string>;
  city: Nullable<string>;
  email: Nullable<string>;
  date_of_birth: Nullable<string>;
  first_name: Nullable<string>;
  gender: Nullable<string>;
}

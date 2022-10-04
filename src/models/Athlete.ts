import { Option } from "./helpers/typings";

export interface Athlete {
  age: Option<number>;
  country: Option<string>;
  bio: Option<string>;
  state: Option<string>;
  last_name: Option<string>;
  sex: Option<string>;
  city: Option<string>;
  email: Option<string>;
  date_of_birth: Option<string>;
  first_name: Option<string>;
  gender: Option<string>;
}

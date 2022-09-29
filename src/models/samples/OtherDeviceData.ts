import { Nullable } from "../helpers/typings";

export interface OtherDeviceData {
  name: string;
  manufacturer: Nullable<string>;
  serial_number: Nullable<string>;
  software_version: Nullable<string>;
  hardware_version: Nullable<string>;
}

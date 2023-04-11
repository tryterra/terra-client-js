import { Option } from '../helpers/typings';

export interface OtherDeviceData {
  name: Option<string>;
  manufacturer: Option<string>;
  serial_number: Option<string>;
  software_version: Option<string>;
  hardware_version: Option<string>;
}

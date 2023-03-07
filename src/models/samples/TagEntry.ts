import { Option } from '../helpers/typings';

export interface TagEntry {
  timestamp: string;
  tag_name: Option<string>;
  notes: Option<string>;
}

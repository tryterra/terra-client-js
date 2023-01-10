import { TerraUser } from '../models/TerraUser';
import { dataType } from './Data';

type EventStatus = 'success' | 'error' | 'warning';

type EventType =
  | 'athlete'
  | 'activity'
  | 'body'
  | 'daily'
  | 'sleep'
  | 'nutrition'
  | 'menstruation'
  | 'auth'
  | 'user_reauth'
  | 'connection_error'
  | 'request_processing'
  | 'google_no_datasource'
  | 'request_completed'
  | 'access_revoked'
  | 'deauth	'
  | 'internal_server_error'
  | 'unknown';

export interface TerraPayload {
  status: EventStatus;
  type: EventType;
  user?: TerraUser;
  message?: string;
  data?: Array<dataType>;
  retry_after_seconds?: number;
  widget_session_id?: string;
  reference_id?: string;
  reason?: string;
}

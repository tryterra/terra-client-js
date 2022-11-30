import { TerraUser } from '../models/TerraUser';
import { RequestWrapper } from './Helpers';

export interface TerraSubscriptionsResponse {
  status: string;
  users: Array<TerraUser>;
}

export function GetSubscribers(devId: string, apiKey: string): Promise<TerraSubscriptionsResponse> {
  const requestOptions = {
    method: 'GET',
    headers: {
      'X-API-Key': apiKey,
      'dev-id': devId,
      'Content-Type': 'application/json',
    },
  };

  return RequestWrapper<TerraSubscriptionsResponse>('subscriptions', requestOptions);
}

import { TerraUser } from '../models/TerraUser';
import { TerraPayload } from './WebhookEvents';
import fetch from 'cross-fetch';
import { RequestWrapper } from './Helpers';

export interface TerraUserResponse {
  status: string;
  user: TerraUser;
  is_authenticated: boolean;
}

export function GetUser(
  devId: string,
  apiKey: string,
  userId: string,
  referenceId: string,
): Promise<TerraUserResponse> {
  const requestOptions = {
    method: 'GET',
    headers: {
      'X-API-Key': apiKey,
      'dev-id': devId,
      'Content-Type': 'application/json',
    },
  };

  return RequestWrapper<TerraUserResponse>('userInfo', requestOptions, {
    user_id: userId,
    reference_id: referenceId,
  });
}

export function DeauthUser(devId: string, apiKey: string, userId: string): Promise<void> {
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'X-API-Key': apiKey,
      'dev-id': devId,
      'Content-Type': 'application/json',
    },
  };

  return new Promise<void>((res, rej) => {
    fetch(`https://api.tryterra.co/v2/auth/deauthenticateUser?user_id=${userId}`, requestOptions)
      .then((_) => res())
      .catch((error) => rej(error as TerraPayload));
  });
}

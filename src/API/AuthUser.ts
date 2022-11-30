import { RequestWrapper } from './Helpers';
export interface TerraAuthUserResponse {
  status: string;
  user_id: string;
  auth_url: string;
}

export function AuthUser(
  devId: string,
  apiKey: string,
  resource: string,
  referenceId?: string,
  language?: string,
  authSuccessRedirectUrl?: string,
  authFailureRedirectUrl?: string,
  facilityId?: string,
): Promise<TerraAuthUserResponse> {
  const raw = JSON.stringify({
    reference_id: referenceId,
    resource,
    auth_success_redirect_url: authSuccessRedirectUrl,
    auth_failure_redirect_url: authFailureRedirectUrl,
    language,
    facility_id: facilityId,
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      'X-API-Key': apiKey,
      'dev-id': devId,
      'Content-Type': 'application/json',
    },
    body: raw,
  };

  return RequestWrapper<TerraAuthUserResponse>('auth/authenticateUser', requestOptions);
}

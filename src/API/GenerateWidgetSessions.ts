import { RequestWrapper } from './Helpers';
export interface TerraWidgetResponse {
  session_id: string;
  status: string;
  url: string;
}

export function GenerateWidgetSession(
  devId: string,
  apiKey: string,
  referenceId: string,
  language: string,
  providers?: string[],
  authSuccessRedirectUrl?: string,
  authFailureRedirectUrl?: string,
  showDisconnect?: boolean,
  useTerraAvengersApp?: boolean,
): Promise<TerraWidgetResponse> {
  const raw = JSON.stringify({
    reference_id: referenceId,
    providers: providers ? providers.join(',') : undefined,
    auth_success_redirect_url: authSuccessRedirectUrl,
    auth_failure_redirect_url: authFailureRedirectUrl,
    language,
    show_disconnect: showDisconnect,
    use_terra_avengers_app: useTerraAvengersApp ?? false,
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

  return RequestWrapper<TerraWidgetResponse>('auth/generateWidgetSession', requestOptions);
}

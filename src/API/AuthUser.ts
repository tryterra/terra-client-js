import { RequestWrapper } from "./Helpers";
export interface TerraAuthUserResponse {
  status: string;
  token: string;
  expires_in: number;
}

export function AuthUser(
  devId: string,
  apiKey: string,
  resource: string,
  referenceId?: string,
  language?: string,
  auth_success_redirect_url?: string,
  auth_failure_redirect_url?: string,
  facilityId?: string
): Promise<TerraAuthUserResponse> {
  var raw = JSON.stringify({
    reference_id: referenceId,
    resource: resource,
    auth_success_redirect_url: auth_success_redirect_url,
    auth_failure_redirect_url: auth_failure_redirect_url,
    language: language,
    facility_id: facilityId,
  });

  const requestOptions = {
    method: "POST",
    headers: {
      "X-API-Key": apiKey,
      "dev-id": devId,
      "Content-Type": "application/json",
    },
    body: raw,
  };

  return RequestWrapper<TerraAuthUserResponse>(
    "auth/authenticateUser",
    requestOptions
  );
}

import { RequestWrapper } from "./Helpers";
export interface TerraWidgetResponse {
  session_id: string;
  status: string;
  url: string;
}

export function GenerateWidgetSession(
  devId: string,
  apiKey: string,
  referenceId: string,
  providers: string[],
  language: string,
  auth_success_redirect_url?: string,
  auth_failure_redirect_url?: string
): Promise<TerraWidgetResponse> {
  var raw = JSON.stringify({
    reference_id: referenceId,
    providers: providers.join(","),
    auth_success_redirect_url: auth_success_redirect_url,
    auth_failure_redirect_url: auth_failure_redirect_url,
    language: language,
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

  return RequestWrapper<TerraWidgetResponse>(
    "auth/generateWidgetSession",
    requestOptions
  );
}

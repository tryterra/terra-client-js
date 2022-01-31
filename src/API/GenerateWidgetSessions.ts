import TerraError from "./TerraError";
import fetch, { Headers } from "node-fetch";

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
  var myHeaders = new Headers();
  myHeaders.append("X-API-Key", apiKey);
  myHeaders.append("dev-id", devId);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    reference_id: referenceId,
    providers: providers.join(","),
    auth_success_redirect_url: auth_success_redirect_url,
    auth_failure_redirect_url: auth_failure_redirect_url,
    language: language,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  return new Promise<TerraWidgetResponse>((res, rej) => {
    fetch(
      "https://api.tryterra.co/v2/auth/generateWidgetSession",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => res(result as TerraWidgetResponse))
      .catch((error) => rej(error as TerraError));
  });
}

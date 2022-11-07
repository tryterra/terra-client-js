import { RequestWrapper } from "./Helpers";
export interface TerraAuthTokenResponse {
  status: string;
  token: string;
  expires_in: number;
}

export function GenerateAuthToken(
  devId: string,
  apiKey: string
): Promise<TerraAuthTokenResponse> {
  const requestOptions = {
    method: "POST",
    headers: {
      "X-API-Key": apiKey,
      "dev-id": devId,
      "Content-Type": "application/json",
    },
  };

  return RequestWrapper<TerraAuthTokenResponse>(
    "auth/generateAuthToken",
    requestOptions
  );
}

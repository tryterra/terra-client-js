import { RequestWrapper } from "./Helpers";

export interface TerraProvidersResponse {
  status: string;
  providers: string[];
}

export function GetProviders(): Promise<TerraProvidersResponse> {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return RequestWrapper<TerraProvidersResponse>("integrations", requestOptions);
}

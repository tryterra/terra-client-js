import TerraError from "./TerraError";
import fetch from "cross-fetch";

export interface TerraProvidersResponse {
  status: string;
  providers: string[];
}

export function GetProviders(): Promise<TerraProvidersResponse> {
  var requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return new Promise<TerraProvidersResponse>((res, rej) => {
    fetch("https://api.tryterra.co/v2/integrations", requestOptions)
      .then((response) => response.json())
      .then((result) => res(result as TerraProvidersResponse))
      .catch((error) => rej(error as TerraError));
  });
}

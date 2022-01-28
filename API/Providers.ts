import TerraError from "./TerraError";

export interface TerraProvidersResponse {
  status: string;
  providers: string[];
}

export function GetProviders(): Promise<TerraProvidersResponse> {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  return new Promise<TerraProvidersResponse>((res, rej) => {
    fetch("https://api.tryterra.co/v2/integrations", requestOptions)
      .then((response) => response.json())
      .then((result) => res(result as TerraProvidersResponse))
      .catch((error) => rej(error as TerraError));
  });
}

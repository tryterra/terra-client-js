import { TerraUser } from "../models/TerraUser";
import TerraError from "./TerraError";

export interface TerraSubscriptionsResponse {
  status: string;
  users: Array<TerraUser>;
}

export function GetSubscribers(
  devId: string,
  apiKey: string
): Promise<TerraSubscriptionsResponse> {
  var myHeaders = new Headers();
  myHeaders.append("X-API-Key", apiKey);
  myHeaders.append("dev-id", devId);
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  return new Promise<TerraSubscriptionsResponse>((res, rej) => {
    fetch("https://api.tryterra.co/v2/subscriptions", requestOptions)
      .then((response) => response.json())
      .then((result) => res(result as TerraSubscriptionsResponse))
      .catch((error) => rej(error as TerraError));
  });
}

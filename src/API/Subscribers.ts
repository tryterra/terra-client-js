import { TerraUser } from "../models/TerraUser";
import TerraError from "./TerraError";
import fetch from "cross-fetch";

export interface TerraSubscriptionsResponse {
  status: string;
  users: Array<TerraUser>;
}

export function GetSubscribers(
  devId: string,
  apiKey: string
): Promise<TerraSubscriptionsResponse> {
  var requestOptions = {
    method: "GET",
    headers: {
      "X-API-Key": apiKey,
      "dev-id": devId,
      "Content-Type": "application/json",
    },
  };

  return new Promise<TerraSubscriptionsResponse>((res, rej) => {
    fetch("https://api.tryterra.co/v2/subscriptions", requestOptions)
      .then((response) => response.json())
      .then((result) => res(result as TerraSubscriptionsResponse))
      .catch((error) => rej(error as TerraError));
  });
}

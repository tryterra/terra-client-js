import { TerraUser } from "../models/TerraUser";
import TerraError from "./TerraError";
import fetch, { Headers } from "node-fetch";

export interface TerraUserResponse {
  status: string;
  user: TerraUser;
  is_authenticated: Boolean;
}

export function GetUser(
  devId: string,
  apiKey: string,
  userId: string
): Promise<TerraUserResponse> {
  var myHeaders = new Headers();
  myHeaders.append("X-API-Key", apiKey);
  myHeaders.append("dev-id", devId);
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  return new Promise<TerraUserResponse>((res, rej) => {
    fetch(
      `https://api.tryterra.co/v2/userInfo?user_id=${userId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => res(result as TerraUserResponse))
      .catch((error) => rej(error as TerraError));
  });
}

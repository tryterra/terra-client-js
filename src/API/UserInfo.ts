import { TerraUser } from "../models/TerraUser";
import TerraError from "./TerraError";
import fetch from "cross-fetch";

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
  var requestOptions = {
    method: "GET",
    headers: {
      "X-API-Key": apiKey,
      "dev-id": devId,
      "Content-Type": "application/json",
    },
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

export function DeauthUser(
  devId: string,
  apiKey: string,
  userId: string
): Promise<void> {
  var requestOptions = {
    method: "DELETE",
    headers: {
      "X-API-Key": apiKey,
      "dev-id": devId,
      "Content-Type": "application/json",
    },
  };

  return new Promise<void>((res, rej) => {
    fetch(
      `https://api.tryterra.co/v2/auth/deauthenticateUser?user_id=${userId}`,
      requestOptions
    )
      .then((_) => res())
      .catch((error) => rej(error as TerraError));
  });
}

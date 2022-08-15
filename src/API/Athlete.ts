import { Athlete } from "../models/Athlete";
import { TerraUser } from "../models/TerraUser";
import { RequestWrapper } from "./Helpers";

export interface TerraAthleteResponse {
  athlete: Athlete;
  status: string;
  type: string;
  user: TerraUser;
  reference?: string;
}

export function GetAthlete(
  devId: string,
  apiKey: string,
  userId: string,
  toWebhook: boolean = true
): Promise<TerraAthleteResponse> {
  const requestOptions = {
    method: "GET",
    headers: {
      "X-API-Key": apiKey,
      "dev-id": devId,
      "Content-Type": "application/json",
    },
  };

  const requestParams = {
    user_id: userId,
    to_webhook: toWebhook,
  };

  return RequestWrapper<TerraAthleteResponse>(
    "athlete",
    requestOptions,
    requestParams
  );
}

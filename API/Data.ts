import { TerraUser } from "../models/TerraUser";
import { DateToTerraDate } from "./Helpers";
import TerraError from "./TerraError";

export interface TerraDataResponse<T> {
  data: Array<T>;
  status: string;
  user: TerraUser;
  type: string;
}
export function GetData<T>(
  type: string,
  devId: string,
  apiKey: string,
  userId: string,
  startDate: Date,
  endDate?: Date,
  toWebhook?: Boolean
): Promise<TerraDataResponse<T>> {
  var myHeaders = new Headers();
  myHeaders.append("X-API-Key", apiKey);
  myHeaders.append("dev-id", devId);
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  var params = {
    user_id: userId,
    start_date: DateToTerraDate(startDate),
  };
  if (endDate) {
    params = Object.assign({}, params, {
      end_date: DateToTerraDate(endDate),
    });
  }
  if (toWebhook !== undefined) {
    params = Object.assign({}, params, {
      to_webhook: toWebhook.toString(),
    });
  }

  return new Promise<TerraDataResponse<T>>((res, rej) => {
    console.log(
      `https://api.tryterra.co/v2/${type}?` + new URLSearchParams(params)
    );
    fetch(
      `https://api.tryterra.co/v2/${type}?` + new URLSearchParams(params),
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => res(result as TerraDataResponse<T>))
      .catch((error) => rej(error as TerraError));
  });
}

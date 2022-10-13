import { URL } from "url";
import { TerraPayload } from "./WebhookEvents";
import fetch from "cross-fetch";

function ZeroPad(value: number, minSize: number) {
  return (
    "0".repeat(Math.max(minSize - value.toString().length, 0)) +
    value.toString()
  );
}

export function DateToTerraDate(d: Date): string {
  var month = d.getUTCMonth() + 1; //months from 1-12
  var day = d.getUTCDate();
  var year = d.getUTCFullYear();

  return year + "-" + ZeroPad(month, 2) + "-" + ZeroPad(day, 2);
}

export function RequestWrapper<T>(
  endpoint: string,
  requestOptions: RequestInit,
  requestParams: { [id: string]: any } = {}
): Promise<T> {
  return new Promise<T>((res, rej) => {
    const url = new URL(endpoint, "https://api.tryterra.co/v2/");
    Object.entries(requestParams).forEach(([k, v]) =>
      url.searchParams.append(k, v)
    );
    fetch(url, requestOptions)
      .then((response) =>
        response
          .json()
          .then((result) =>
            response.ok ? res(result as T) : rej(result as TerraPayload)
          )
      )
      .catch((error) => rej(error));
  });
}

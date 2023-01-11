import { URL } from 'url';
import { TerraPayload } from './WebhookEvents';
import fetch from 'cross-fetch';
import { createHmac } from 'crypto';
function ZeroPad(value: number, minSize: number) {
  return '0'.repeat(Math.max(minSize - value.toString().length, 0)) + value.toString();
}

export function DateToTerraDate(d: Date): string {
  const month = d.getUTCMonth() + 1; // months from 1-12
  const day = d.getUTCDate();
  const year = d.getUTCFullYear();

  return year + '-' + ZeroPad(month, 2) + '-' + ZeroPad(day, 2);
}

export function RequestWrapper<T>(
  endpoint: string,
  requestOptions: RequestInit,
  requestParams: { [id: string]: any } = {},
): Promise<T> {
  checkForServerSideAndWarn();
  return new Promise<T>((res, rej) => {
    const url = new URL(endpoint, 'https://api.tryterra.co/v2/');
    Object.entries(requestParams).forEach(([k, v]) => url.searchParams.append(k, v));
    fetch(url, requestOptions)
      .then((response) => {
        if (response.status === 500 || response.status === 502) {
          rej({
            status: 'error',
            type: 'internal_server_error',
            message: response.status.toString(),
          } as TerraPayload);
        }
        response.json().then((result) => (response.ok ? res(result as T) : rej(result as TerraPayload)));
      })
      .catch((error) =>
        rej({
          status: 'error',
          type: 'unknown',
          message: error,
        } as TerraPayload),
      );
  });
}

export function checkForServerSideAndWarn() {
  if (typeof process !== 'undefined' && process.release.name.search(/node|io.js/) !== -1) {
    // This is good, we are running in node
  } else {
    // tslint:disable-next-line:no-console
    console.warn(
      'This script is not running in Node.js which means this is probably running on the client side which means you are exposing your API Key which is very dangerous',
    );
  }
}

export function CheckTerraSignature(terraSignature: string, payload: string, secret: string): boolean {
  const s = terraSignature.split(',');
  const t = s[0].split('=')[1];
  const v1 = s[1].split('=')[1];
  const hmac = createHmac('sha256', secret)
    .update(t + '.' + payload)
    .digest('hex');
  return hmac === v1;
}

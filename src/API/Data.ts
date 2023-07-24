import { TerraUser } from '../models/TerraUser';
import { DateToTerraDate, RequestWrapper } from './Helpers';

export interface TerraDataResponse<T> {
  data: Array<T>;
  status: string;
  user: TerraUser;
  type: string;
  reference?: string;
}

export type dataType = 'activity' | 'body' | 'daily' | 'nutrition' | 'sleep' | 'menstruation';

export function GetData<T>(
  type: dataType,
  devId: string,
  apiKey: string,
  userId: string,
  startDate: Date,
  endDate?: Date,
  toWebhook?: boolean,
  withSamples?: boolean,
  retryIfRateLimited?: boolean,
): Promise<TerraDataResponse<T>> {
  const requestOptions = {
    method: 'GET',
    headers: {
      'X-API-Key': apiKey,
      'dev-id': devId,
      'Content-Type': 'application/json',
    },
  };

  let requestParams = {
    user_id: userId,
    start_date: DateToTerraDate(startDate),
  };
  if (endDate) {
    requestParams = Object.assign({}, requestParams, {
      end_date: DateToTerraDate(endDate),
    });
  }
  if (toWebhook !== undefined) {
    requestParams = Object.assign({}, requestParams, {
      to_webhook: toWebhook.toString(),
    });
  }
  if (withSamples !== undefined) {
    requestParams = Object.assign({}, requestParams, {
      with_samples: withSamples,
    });
  }
  if (retryIfRateLimited !== undefined) {
    requestParams = Object.assign({}, requestParams, {
      retry_if_rate_limited: retryIfRateLimited,
    });
  }

  return RequestWrapper<TerraDataResponse<T>>(`${type}`, requestOptions, requestParams);
}

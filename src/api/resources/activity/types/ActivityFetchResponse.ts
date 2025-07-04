/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Terra from "../../../index.js";

export type ActivityFetchResponse =
    | {
          user?: Terra.TerraUser | undefined;
          data?: Terra.Activity[] | undefined;
          type?: string | undefined;
      }
    | Terra.NoDataReturned
    | Terra.DataSentToWebhook
    | Terra.RequestProcessing
    | Terra.RateLimitRequestProcessing
    | Terra.LargeRequestProcessingEvent;

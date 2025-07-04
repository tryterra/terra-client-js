/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Terra from "../../../index.js";

export type BodyFetchResponse =
    | {
          user?: Terra.TerraUser | undefined;
          data?: Terra.Body[] | undefined;
          type?: string | undefined;
      }
    | Terra.NoDataReturned
    | Terra.DataSentToWebhook
    | Terra.RequestProcessing
    | Terra.RateLimitRequestProcessing
    | Terra.LargeRequestProcessingEvent;

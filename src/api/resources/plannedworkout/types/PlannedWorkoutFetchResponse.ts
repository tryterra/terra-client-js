/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Terra from "../../../index.js";

export type PlannedWorkoutFetchResponse =
    | {
          user?: Terra.TerraUser | undefined;
          data?: Terra.PlannedWorkout[] | undefined;
          type?: string | undefined;
      }
    | Terra.NoDataReturned
    | Terra.DataSentToWebhook;

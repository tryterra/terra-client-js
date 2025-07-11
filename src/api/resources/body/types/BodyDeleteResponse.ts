/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Terra from "../../../index.js";

export interface BodyDeleteResponse {
    user?: Terra.TerraUser;
    processed_data?: BodyDeleteResponse.ProcessedData.Item[];
}

export namespace BodyDeleteResponse {
    export type ProcessedData = ProcessedData.Item[];

    export namespace ProcessedData {
        export interface Item {
            /** Identifier of the body metric entries whose deletion was attempted */
            id?: string;
            /** Response code from the provider when attempting to delete the body metric entries */
            response_code?: number;
        }
    }
}

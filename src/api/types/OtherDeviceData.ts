/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Terra from "../index.js";

export interface OtherDeviceData {
    /** Device manufacturer name. */
    manufacturer?: string;
    /** Hardware version of the device. */
    hardware_version?: string;
    /** Device Serial Number. */
    serial_number?: string;
    /** Device name - note that this can also be the name of the application/package which the data comes from, if coming from a data aggregator such as Google Fit. */
    name?: string;
    /** Device Software Version. */
    software_version?: string;
    activation_timestamp?: string;
    data_provided?: Terra.DeviceDataType[];
    last_upload_date?: string;
}

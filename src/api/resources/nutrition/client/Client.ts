/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments.js";
import * as core from "../../../../core/index.js";
import * as Terra from "../../../index.js";
import { toJson } from "../../../../core/json.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import * as errors from "../../../../errors/index.js";

export declare namespace Nutrition {
    export interface Options {
        environment?: core.Supplier<environments.TerraEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        apiKey?: core.Supplier<string | undefined>;
        /** Override the dev-id header */
        devId: core.Supplier<string>;
        /** Additional headers to include in requests. */
        headers?: Record<string, string | core.Supplier<string | undefined> | undefined>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the dev-id header */
        devId?: string;
        /** Additional headers to include in the request. */
        headers?: Record<string, string | core.Supplier<string | undefined> | undefined>;
    }
}

export class Nutrition {
    protected readonly _options: Nutrition.Options;

    constructor(_options: Nutrition.Options) {
        this._options = _options;
    }

    /**
     * Fetches nutrition log data such as meal type, calories, macronutrients etc. for a given user ID
     *
     * @param {Terra.NutritionFetchRequest} request
     * @param {Nutrition.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Terra.BadRequestError}
     * @throws {@link Terra.UnauthorizedError}
     * @throws {@link Terra.NotFoundError}
     *
     * @example
     *     await client.nutrition.fetch({
     *         user_id: "user_id",
     *         start_date: 1
     *     })
     */
    public fetch(
        request: Terra.NutritionFetchRequest,
        requestOptions?: Nutrition.RequestOptions,
    ): core.HttpResponsePromise<Terra.NutritionFetchResponse> {
        return core.HttpResponsePromise.fromPromise(this.__fetch(request, requestOptions));
    }

    private async __fetch(
        request: Terra.NutritionFetchRequest,
        requestOptions?: Nutrition.RequestOptions,
    ): Promise<core.WithRawResponse<Terra.NutritionFetchResponse>> {
        const {
            user_id: userId,
            start_date: startDate,
            end_date: endDate,
            to_webhook: toWebhook,
            with_samples: withSamples,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        _queryParams["user_id"] = userId;
        _queryParams["start_date"] = typeof startDate === "string" ? startDate : toJson(startDate);
        if (endDate != null) {
            _queryParams["end_date"] = endDate.toString();
        }

        if (toWebhook != null) {
            _queryParams["to_webhook"] = toWebhook.toString();
        }

        if (withSamples != null) {
            _queryParams["with_samples"] = withSamples.toString();
        }

        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.TerraEnvironment.Default,
                "nutrition",
            ),
            method: "GET",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({
                    "dev-id": requestOptions?.devId,
                    ...(await this._getCustomAuthorizationHeaders()),
                }),
                requestOptions?.headers,
            ),
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Terra.NutritionFetchResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Terra.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 401:
                    throw new Terra.UnauthorizedError(_response.error.body as unknown, _response.rawResponse);
                case 404:
                    throw new Terra.NotFoundError(_response.error.body as unknown, _response.rawResponse);
                default:
                    throw new errors.TerraError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.TerraError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.TerraTimeoutError("Timeout exceeded when calling GET /nutrition.");
            case "unknown":
                throw new errors.TerraError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Used to post nutrition logs to a provider. This endpoint only works for users connected via Fitbit. Returns error for other providers.
     *
     * @param {Terra.NutritionWriteRequest} request
     * @param {Nutrition.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Terra.BadRequestError}
     * @throws {@link Terra.NotFoundError}
     *
     * @example
     *     await client.nutrition.write({
     *         data: [{
     *                 metadata: {
     *                     end_time: "2022-10-28T10:00:00.000000+01:00",
     *                     start_time: "1999-11-23T09:00:00.000000+02:00"
     *                 }
     *             }]
     *     })
     */
    public write(
        request: Terra.NutritionWriteRequest,
        requestOptions?: Nutrition.RequestOptions,
    ): core.HttpResponsePromise<Terra.NutritionWriteResponse> {
        return core.HttpResponsePromise.fromPromise(this.__write(request, requestOptions));
    }

    private async __write(
        request: Terra.NutritionWriteRequest,
        requestOptions?: Nutrition.RequestOptions,
    ): Promise<core.WithRawResponse<Terra.NutritionWriteResponse>> {
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.TerraEnvironment.Default,
                "nutrition",
            ),
            method: "POST",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({
                    "dev-id": requestOptions?.devId,
                    ...(await this._getCustomAuthorizationHeaders()),
                }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Terra.NutritionWriteResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Terra.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 404:
                    throw new Terra.NotFoundError(_response.error.body as unknown, _response.rawResponse);
                default:
                    throw new errors.TerraError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.TerraError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.TerraTimeoutError("Timeout exceeded when calling POST /nutrition.");
            case "unknown":
                throw new errors.TerraError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Used to delete nutrition logs the user has registered on their account
     *
     * @param {Terra.NutritionDeleteRequest} request
     * @param {Nutrition.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Terra.BadRequestError}
     * @throws {@link Terra.UnauthorizedError}
     * @throws {@link Terra.NotFoundError}
     *
     * @example
     *     await client.nutrition.delete({
     *         user_id: "user_id"
     *     })
     */
    public delete(
        request: Terra.NutritionDeleteRequest,
        requestOptions?: Nutrition.RequestOptions,
    ): core.HttpResponsePromise<Terra.NutritionDeleteResponse> {
        return core.HttpResponsePromise.fromPromise(this.__delete(request, requestOptions));
    }

    private async __delete(
        request: Terra.NutritionDeleteRequest,
        requestOptions?: Nutrition.RequestOptions,
    ): Promise<core.WithRawResponse<Terra.NutritionDeleteResponse>> {
        const { user_id: userId, ..._body } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        _queryParams["user_id"] = userId;
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.TerraEnvironment.Default,
                "nutrition",
            ),
            method: "DELETE",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({
                    "dev-id": requestOptions?.devId,
                    ...(await this._getCustomAuthorizationHeaders()),
                }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: _body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Terra.NutritionDeleteResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Terra.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 401:
                    throw new Terra.UnauthorizedError(_response.error.body as unknown, _response.rawResponse);
                case 404:
                    throw new Terra.NotFoundError(_response.error.body as unknown, _response.rawResponse);
                default:
                    throw new errors.TerraError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.TerraError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.TerraTimeoutError("Timeout exceeded when calling DELETE /nutrition.");
            case "unknown":
                throw new errors.TerraError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "x-api-key": apiKeyValue };
    }
}

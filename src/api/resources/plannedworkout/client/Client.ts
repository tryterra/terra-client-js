/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments.js";
import * as core from "../../../../core/index.js";
import * as Terra from "../../../index.js";
import { toJson } from "../../../../core/json.js";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../core/headers.js";
import * as errors from "../../../../errors/index.js";

export declare namespace Plannedworkout {
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

export class Plannedworkout {
    protected readonly _options: Plannedworkout.Options;

    constructor(_options: Plannedworkout.Options) {
        this._options = _options;
    }

    /**
     * Used to get workout plans the user has registered on their account. This can be strength workouts (sets, reps, weight lifted) or cardio workouts (warmup, intervals of different intensities, cooldown etc)
     *
     * @param {Terra.PlannedWorkoutFetchRequest} request
     * @param {Plannedworkout.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Terra.BadRequestError}
     * @throws {@link Terra.UnauthorizedError}
     * @throws {@link Terra.NotFoundError}
     *
     * @example
     *     await client.plannedworkout.fetch({
     *         user_id: "user_id",
     *         start_date: 1
     *     })
     */
    public fetch(
        request: Terra.PlannedWorkoutFetchRequest,
        requestOptions?: Plannedworkout.RequestOptions,
    ): core.HttpResponsePromise<Terra.PlannedWorkoutFetchResponse> {
        return core.HttpResponsePromise.fromPromise(this.__fetch(request, requestOptions));
    }

    private async __fetch(
        request: Terra.PlannedWorkoutFetchRequest,
        requestOptions?: Plannedworkout.RequestOptions,
    ): Promise<core.WithRawResponse<Terra.PlannedWorkoutFetchResponse>> {
        const { user_id: userId, start_date: startDate, end_date: endDate, to_webhook: toWebhook } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        _queryParams["user_id"] = userId;
        _queryParams["start_date"] = typeof startDate === "string" ? startDate : toJson(startDate);
        if (endDate != null) {
            _queryParams["end_date"] = endDate.toString();
        }

        if (toWebhook != null) {
            _queryParams["to_webhook"] = toWebhook.toString();
        }

        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.TerraEnvironment.Default,
                "plannedWorkout",
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
            return { data: _response.body as Terra.PlannedWorkoutFetchResponse, rawResponse: _response.rawResponse };
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
                throw new errors.TerraTimeoutError("Timeout exceeded when calling GET /plannedWorkout.");
            case "unknown":
                throw new errors.TerraError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Used to post workout plans users can follow on their wearable. This can be strength workouts (sets, reps, weight lifted) or cardio workouts (warmup, intervals of different intensities, cooldown etc)
     *
     * @param {Terra.PlannedWorkoutWriteRequest} request
     * @param {Plannedworkout.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Terra.BadRequestError}
     * @throws {@link Terra.NotFoundError}
     *
     * @example
     *     await client.plannedworkout.write({
     *         data: [{}]
     *     })
     */
    public write(
        request: Terra.PlannedWorkoutWriteRequest,
        requestOptions?: Plannedworkout.RequestOptions,
    ): core.HttpResponsePromise<Terra.PlannedWorkoutWriteResponse> {
        return core.HttpResponsePromise.fromPromise(this.__write(request, requestOptions));
    }

    private async __write(
        request: Terra.PlannedWorkoutWriteRequest,
        requestOptions?: Plannedworkout.RequestOptions,
    ): Promise<core.WithRawResponse<Terra.PlannedWorkoutWriteResponse>> {
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.TerraEnvironment.Default,
                "plannedWorkout",
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
            return { data: _response.body as Terra.PlannedWorkoutWriteResponse, rawResponse: _response.rawResponse };
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
                throw new errors.TerraTimeoutError("Timeout exceeded when calling POST /plannedWorkout.");
            case "unknown":
                throw new errors.TerraError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Used to delete workout plans the user has registered on their account. This can be strength workouts (sets, reps, weight lifted) or cardio workouts (warmup, intervals of different intensities, cooldown etc)
     *
     * @param {Terra.PlannedWorkoutDeleteRequest} request
     * @param {Plannedworkout.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Terra.BadRequestError}
     * @throws {@link Terra.UnauthorizedError}
     * @throws {@link Terra.NotFoundError}
     *
     * @example
     *     await client.plannedworkout.delete({
     *         user_id: "user_id"
     *     })
     */
    public delete(
        request: Terra.PlannedWorkoutDeleteRequest,
        requestOptions?: Plannedworkout.RequestOptions,
    ): core.HttpResponsePromise<Terra.PlannedWorkoutDeleteResponse> {
        return core.HttpResponsePromise.fromPromise(this.__delete(request, requestOptions));
    }

    private async __delete(
        request: Terra.PlannedWorkoutDeleteRequest,
        requestOptions?: Plannedworkout.RequestOptions,
    ): Promise<core.WithRawResponse<Terra.PlannedWorkoutDeleteResponse>> {
        const { user_id: userId, ..._body } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        _queryParams["user_id"] = userId;
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.TerraEnvironment.Default,
                "plannedWorkout",
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
            return { data: _response.body as Terra.PlannedWorkoutDeleteResponse, rawResponse: _response.rawResponse };
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
                throw new errors.TerraTimeoutError("Timeout exceeded when calling DELETE /plannedWorkout.");
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

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../mock-server/MockServerPool.js";
import { TerraClient } from "../../src/Client";

describe("Plannedworkout", () => {
    test("fetch", async () => {
        const server = mockServerPool.createServer();
        const client = new TerraClient({ apiKey: "test", devId: "test", environment: server.baseUrl });

        const rawResponseBody = {
            user: {
                user_id: "123e4567-e89b-12d3-a456-426614174000",
                provider: "FITBIT",
                last_webhook_update: "2022-12-12T10:00:00.000000+00:00",
                scopes: "activity:read,sleep:read",
                reference_id: "user123@email.com",
                active: true,
            },
            data: [{ steps: [{ type: "PlannedWorkoutStep" }] }],
            type: "type",
        };
        server.mockEndpoint().get("/plannedWorkout").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.plannedworkout.fetch({
            user_id: "user_id",
            start_date: 1,
        });
        expect(response).toEqual({
            user: {
                user_id: "123e4567-e89b-12d3-a456-426614174000",
                provider: "FITBIT",
                last_webhook_update: "2022-12-12T10:00:00.000000+00:00",
                scopes: "activity:read,sleep:read",
                reference_id: "user123@email.com",
                active: true,
            },
            data: [
                {
                    steps: [
                        {
                            type: "PlannedWorkoutStep",
                        },
                    ],
                },
            ],
            type: "type",
        });
    });

    test("write", async () => {
        const server = mockServerPool.createServer();
        const client = new TerraClient({ apiKey: "test", devId: "test", environment: server.baseUrl });
        const rawRequestBody = { data: [{}] };
        const rawResponseBody = {
            user: {
                user_id: "123e4567-e89b-12d3-a456-426614174000",
                provider: "FITBIT",
                last_webhook_update: "2022-12-12T10:00:00.000000+00:00",
                scopes: "activity:read,sleep:read",
                reference_id: "user123@email.com",
                active: true,
            },
            log_ids: ["log_ids"],
            message: "message",
        };
        server
            .mockEndpoint()
            .post("/plannedWorkout")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.plannedworkout.write({
            data: [{}],
        });
        expect(response).toEqual({
            user: {
                user_id: "123e4567-e89b-12d3-a456-426614174000",
                provider: "FITBIT",
                last_webhook_update: "2022-12-12T10:00:00.000000+00:00",
                scopes: "activity:read,sleep:read",
                reference_id: "user123@email.com",
                active: true,
            },
            log_ids: ["log_ids"],
            message: "message",
        });
    });

    test("delete", async () => {
        const server = mockServerPool.createServer();
        const client = new TerraClient({ apiKey: "test", devId: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            user: {
                user_id: "123e4567-e89b-12d3-a456-426614174000",
                provider: "FITBIT",
                last_webhook_update: "2022-12-12T10:00:00.000000+00:00",
                scopes: "activity:read,sleep:read",
                reference_id: "user123@email.com",
                active: true,
            },
            processed_data: [{ id: "id", response_code: 1 }],
        };
        server
            .mockEndpoint()
            .delete("/plannedWorkout")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.plannedworkout.delete({
            user_id: "user_id",
        });
        expect(response).toEqual({
            user: {
                user_id: "123e4567-e89b-12d3-a456-426614174000",
                provider: "FITBIT",
                last_webhook_update: "2022-12-12T10:00:00.000000+00:00",
                scopes: "activity:read,sleep:read",
                reference_id: "user123@email.com",
                active: true,
            },
            processed_data: [
                {
                    id: "id",
                    response_code: 1,
                },
            ],
        });
    });
});

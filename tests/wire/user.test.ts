/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../mock-server/MockServerPool.js";
import { TerraClient } from "../../src/Client";

describe("User", () => {
    test("modifyuser", async () => {
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
            status: "success",
        };
        server
            .mockEndpoint()
            .patch("/users/user_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.user.modifyuser("user_id");
        expect(response).toEqual({
            user: {
                user_id: "123e4567-e89b-12d3-a456-426614174000",
                provider: "FITBIT",
                last_webhook_update: "2022-12-12T10:00:00.000000+00:00",
                scopes: "activity:read,sleep:read",
                reference_id: "user123@email.com",
                active: true,
            },
            status: "success",
        });
    });

    test("getinfoforuserid", async () => {
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
            status: "success",
            is_authenticated: true,
        };
        server.mockEndpoint().get("/userInfo").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.user.getinfoforuserid();
        expect(response).toEqual({
            user: {
                user_id: "123e4567-e89b-12d3-a456-426614174000",
                provider: "FITBIT",
                last_webhook_update: "2022-12-12T10:00:00.000000+00:00",
                scopes: "activity:read,sleep:read",
                reference_id: "user123@email.com",
                active: true,
            },
            status: "success",
            is_authenticated: true,
        });
    });

    test("getalluserids", async () => {
        const server = mockServerPool.createServer();
        const client = new TerraClient({ apiKey: "test", devId: "test", environment: server.baseUrl });

        const rawResponseBody = {
            users: [
                {
                    user_id: "123e4567-e89b-12d3-a456-426614174000",
                    provider: "FITBIT",
                    last_webhook_update: "2022-12-12T10:00:00.000000+00:00",
                    scopes: "activity:read,sleep:read",
                    reference_id: "user123@email.com",
                    active: true,
                },
            ],
        };
        server.mockEndpoint().get("/subscriptions").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.user.getalluserids();
        expect(response).toEqual({
            users: [
                {
                    user_id: "123e4567-e89b-12d3-a456-426614174000",
                    provider: "FITBIT",
                    last_webhook_update: "2022-12-12T10:00:00.000000+00:00",
                    scopes: "activity:read,sleep:read",
                    reference_id: "user123@email.com",
                    active: true,
                },
            ],
        });
    });

    test("getinfoformultipleuserids", async () => {
        const server = mockServerPool.createServer();
        const client = new TerraClient({ apiKey: "test", devId: "test", environment: server.baseUrl });
        const rawRequestBody = ["string"];
        const rawResponseBody = [
            {
                user_id: "123e4567-e89b-12d3-a456-426614174000",
                provider: "FITBIT",
                last_webhook_update: "2022-12-12T10:00:00.000000+00:00",
                scopes: "activity:read,sleep:read",
                reference_id: "user123@email.com",
                active: true,
            },
        ];
        server
            .mockEndpoint()
            .post("/bulkUserInfo")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.user.getinfoformultipleuserids(["string"]);
        expect(response).toEqual([
            {
                user_id: "123e4567-e89b-12d3-a456-426614174000",
                provider: "FITBIT",
                last_webhook_update: "2022-12-12T10:00:00.000000+00:00",
                scopes: "activity:read,sleep:read",
                reference_id: "user123@email.com",
                active: true,
            },
        ]);
    });
});

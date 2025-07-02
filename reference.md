# Reference

## Authentication

<details><summary><code>client.authentication.<a href="/src/api/resources/authentication/client/Client.ts">authenticateuser</a>({ ...params }) -> Terra.AuthenticationAuthenticateUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a login link that allows end users to connect their fitness tracking account

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authentication.authenticateuser({
    resource: "FITBIT",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.AuthenticationAuthenticateUserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Authentication.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.authentication.<a href="/src/api/resources/authentication/client/Client.ts">generatewidgetsession</a>({ ...params }) -> Terra.AuthenticationGenerateWidgetSessionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generates a link to redirect an end user to for them to select an integration and log in with their fitness data provider

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authentication.generatewidgetsession();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.WidgetSessionParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Authentication.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.authentication.<a href="/src/api/resources/authentication/client/Client.ts">deauthenticateuser</a>({ ...params }) -> Terra.AuthenticationDeauthenticateUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes all records of the user on Terra's end, revoking Terra's access to their data

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authentication.deauthenticateuser({
    user_id: "user_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.AuthenticationDeauthenticateUserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Authentication.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.authentication.<a href="/src/api/resources/authentication/client/Client.ts">generateauthtoken</a>() -> Terra.AuthenticationGenerateAuthTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a token to be used with initConnection() functions in the Terra mobile SDKs in order to create a user record for Apple Health or Samsung Health (or equivalent)

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authentication.generateauthtoken();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Authentication.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## User

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">modifyuser</a>(userId, { ...params }) -> Terra.UserModifyUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Terra user's reference_id or active status

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.modifyuser("user_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — Terra user ID to update

</dd>
</dl>

<dl>
<dd>

**request:** `Terra.UserModifyUserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getinfoforuserid</a>({ ...params }) -> Terra.UserGetInfoForUserIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to query for information on one Terra user ID, or to query for all registered Terra User objects under one reference ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getinfoforuserid();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.UserGetInfoForUserIdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getalluserids</a>({ ...params }) -> Terra.UserGetAllUserIDsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to query for information for all Terra User IDs. Supports optional pagination via `page` and `per_page`. If `page` is not provided, it returns all users in one go (backwards compatibility).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getalluserids();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.UserGetAllUserIDsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getinfoformultipleuserids</a>({ ...params }) -> Terra.TerraUser[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to query for information for multiple Terra User IDs

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getinfoformultipleuserids(["string"]);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `string[]`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Activity

<details><summary><code>client.activity.<a href="/src/api/resources/activity/client/Client.ts">fetch</a>({ ...params }) -> Terra.ActivityFetchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches completed workout sessions, with a defined start and end time and activity type (e.g. running, cycling, etc.)

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.activity.fetch({
    user_id: "user_id",
    start_date: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.ActivityFetchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Activity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.activity.<a href="/src/api/resources/activity/client/Client.ts">write</a>({ ...params }) -> Terra.ActivityWriteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to post activity data to a provider. This endpoint only works for users connected via Wahoo. Returns error for other providers.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.activity.write({
    data: [
        {
            metadata: {
                end_time: "2022-10-28T10:00:00.000000+01:00",
                start_time: "1999-11-23T09:00:00.000000+02:00",
                summary_id: "123e4567-e89b-12d3-a456-426614174000",
                type: 1.1,
                upload_type: 1.1,
            },
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.ActivityWriteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Activity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Athlete

<details><summary><code>client.athlete.<a href="/src/api/resources/athlete/client/Client.ts">fetch</a>({ ...params }) -> Terra.AthleteFetchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches relevant profile info such as first & last name, birth date etc. for a given user ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.athlete.fetch({
    user_id: "user_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.AthleteFetchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Athlete.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Body

<details><summary><code>client.body.<a href="/src/api/resources/body/client/Client.ts">fetch</a>({ ...params }) -> Terra.BodyFetchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches body metrics such as weight, height, body fat percentage etc. for a given user ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.body.fetch({
    user_id: "user_id",
    start_date: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.BodyFetchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Body.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.body.<a href="/src/api/resources/body/client/Client.ts">write</a>({ ...params }) -> Terra.BodyWriteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to post body data to a provider. This endpoint only works for users connected via Google Fit. Returns error for other providers.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.body.write({
    data: [
        {
            metadata: {
                end_time: "2022-10-28T10:00:00.000000+01:00",
                start_time: "1999-11-23T09:00:00.000000+02:00",
            },
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.BodyWriteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Body.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.body.<a href="/src/api/resources/body/client/Client.ts">delete</a>({ ...params }) -> Terra.BodyDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to delete Body metrics the user has registered on their account

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.body.delete({
    user_id: "user_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.BodyDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Body.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Daily

<details><summary><code>client.daily.<a href="/src/api/resources/daily/client/Client.ts">fetch</a>({ ...params }) -> Terra.DailyFetchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches daily summaries of activity metrics such as steps, distance, calories burned etc. for a given user ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.daily.fetch({
    user_id: "user_id",
    start_date: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.DailyFetchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Daily.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Menstruation

<details><summary><code>client.menstruation.<a href="/src/api/resources/menstruation/client/Client.ts">fetch</a>({ ...params }) -> Terra.MenstruationFetchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches menstruation data such as cycle length, period length, ovulation date etc. for a given user ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.menstruation.fetch({
    user_id: "user_id",
    start_date: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.MenstruationFetchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Menstruation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Nutrition

<details><summary><code>client.nutrition.<a href="/src/api/resources/nutrition/client/Client.ts">fetch</a>({ ...params }) -> Terra.NutritionFetchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches nutrition log data such as meal type, calories, macronutrients etc. for a given user ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nutrition.fetch({
    user_id: "user_id",
    start_date: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.NutritionFetchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Nutrition.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nutrition.<a href="/src/api/resources/nutrition/client/Client.ts">write</a>({ ...params }) -> Terra.NutritionWriteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to post nutrition logs to a provider. This endpoint only works for users connected via Fitbit. Returns error for other providers.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nutrition.write({
    data: [
        {
            metadata: {
                end_time: "2022-10-28T10:00:00.000000+01:00",
                start_time: "1999-11-23T09:00:00.000000+02:00",
            },
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.NutritionWriteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Nutrition.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.nutrition.<a href="/src/api/resources/nutrition/client/Client.ts">delete</a>({ ...params }) -> Terra.NutritionDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to delete nutrition logs the user has registered on their account

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.nutrition.delete({
    user_id: "user_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.NutritionDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Nutrition.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sleep

<details><summary><code>client.sleep.<a href="/src/api/resources/sleep/client/Client.ts">fetch</a>({ ...params }) -> Terra.SleepFetchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches sleep data such as sleep duration, sleep stages, sleep quality etc. for a given user ID, for sleep sessions with a defined start and end time

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sleep.fetch({
    user_id: "user_id",
    start_date: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.SleepFetchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sleep.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Plannedworkout

<details><summary><code>client.plannedworkout.<a href="/src/api/resources/plannedworkout/client/Client.ts">fetch</a>({ ...params }) -> Terra.PlannedWorkoutFetchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to get workout plans the user has registered on their account. This can be strength workouts (sets, reps, weight lifted) or cardio workouts (warmup, intervals of different intensities, cooldown etc)

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.plannedworkout.fetch({
    user_id: "user_id",
    start_date: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.PlannedWorkoutFetchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Plannedworkout.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.plannedworkout.<a href="/src/api/resources/plannedworkout/client/Client.ts">write</a>({ ...params }) -> Terra.PlannedWorkoutWriteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to post workout plans users can follow on their wearable. This can be strength workouts (sets, reps, weight lifted) or cardio workouts (warmup, intervals of different intensities, cooldown etc)

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.plannedworkout.write({
    data: [{}],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.PlannedWorkoutWriteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Plannedworkout.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.plannedworkout.<a href="/src/api/resources/plannedworkout/client/Client.ts">delete</a>({ ...params }) -> Terra.PlannedWorkoutDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to delete workout plans the user has registered on their account. This can be strength workouts (sets, reps, weight lifted) or cardio workouts (warmup, intervals of different intensities, cooldown etc)

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.plannedworkout.delete({
    user_id: "user_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.PlannedWorkoutDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Plannedworkout.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Integrations

<details><summary><code>client.integrations.<a href="/src/api/resources/integrations/client/Client.ts">fetch</a>() -> Terra.IntegrationsFetchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of all available provider integrations on the API.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.fetch();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Integrations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.integrations.<a href="/src/api/resources/integrations/client/Client.ts">detailedfetch</a>({ ...params }) -> Terra.IntegrationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a detailed list of supported integrations, optionally filtered by the developer's enabled integrations and the requirement for SDK usage.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.integrations.detailedfetch();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Terra.IntegrationsDetailedFetchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Integrations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

# Terra Javascript Package

A wrapper in javascript for the Terra endpoints and models.

Check the example server with a webhook in `/example`!
## Usage

Install using

```sh
npm i terra-api
```

Then import the default `Terra` package from `terra-api`.

Initialise a new Terra instance with:

```js
const terra = new Terra(process.env.DEV_ID, process.env.API_KEY);
```

Now you can call the following functions from the instance:

- `setCurrentUser`
- `getCurrentUser`
- `generateWidgetSession`
- `getProviders`
- `getUsers`
- `getUser`
- `getAthlete`
- `getActivity`
- `getBody`
- `getDaily`
- `getSleep`
- `getMenstruation`

In addition, all the data models documented on https://docs.tryterra.co/data-models are available to import and use. For example

```ts
const terra = new Terra(process.env.DEV_ID, process.env.API_KEY);
terra.setCurrentUser(myDatabase.getARandomUser());
terra.getAthlete(false).then((res) => console.log(res.athlete.first_name));
```

The models support autocompleting the types to manipulate data coming from Terra:

![typed_1](./images/typed_1.png)
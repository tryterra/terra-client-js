# Terra Javascript Package

A wrapper in javascript for the Terra endpoints and models.

Full API reference: https://tryterra.github.io/terra-client-js

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

Now you can call the following functions from the instance, for example:

- `generateWidgetSession`
- `getProviders`
- `getUsers`
- `getUser`
- `deauthUser`
- `getAthlete`
- `getActivity`
- `getBody`
- `getDaily`
- `getSleep`
- `getMenstruation`

Check the full reference on https://tryterra.github.io/terra-client-js/

In addition, all the data models documented on https://docs.tryterra.co/data-models are available to import and use. For example

```ts
const terra = new Terra(process.env.DEV_ID, process.env.API_KEY);
terra
  .getAthlete("1234-user-id-5678", false)
  .then((res) => console.log(res.athlete.first_name))
  .catch((e) => console.log(e.status, e.message));
```

The models support autocompleting the types to manipulate data coming from Terra, which should accelerate your backend development:

![typed_1](./images/typed_1.png)

// import terra
const { default: Terra } = require('terra-api');

// load a config
require('dotenv').config();

// setup a new object instance using the config
const terra = new Terra(process.env.DEV_ID, process.env.API_KEY, process.env.SECRET);

// setup a server using express
const express = require('express');
const app = express();
const PORT = 3000;

// this is important, as it allows you to use rawBody for the signature verification
// bodyParser will change the req.body from req.rawBody
const bodyParser = require('body-parser');
app.use(
  bodyParser.json({
    verify: (req, _, buf) => {
      req.rawBody = buf;
    },
  }),
);

// start the server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// a timeout helper function
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// a function that handles the webhooks
// the function simulates e.g. a transaction to a data store, which takes a random time
// the time is set between 0 and 2 seconds
// randomly, the function will also throw an error
// this is to simulate the handler throwing errors as well to ensure later on they are catched
const { randomInt } = require('crypto');
async function handleWebhook(req) {
  await timeout(randomInt(3) * 1000);
  if (randomInt(3) === 1) throw 'some error';
  console.log(req.url);
}

// a constant signaling if we should handle webhooks one by one or not
HANDLE_SYNC = true

// expose POST /hook endpoint on the server
// this is where Terra will send webhooks
app.post('/hook', (req, res) => {
  // verify the signature of the payload
  if (!terra.checkTerraSignature(req.headers['terra-signature'], req.rawBody)) res.sendStatus(401);
  res.sendStatus(200);

  // handle the payload
  // handle synchonously the payloads one by one as they come in, avoiding race conditions
  if(HANDLE_SYNC) terra.executeSynchronously(handleWebhook, req);
  // race conditions cannot occure, allow async handling
  else handleWebhook(req);
});

// expose GET /session endpoint to generate a widget session
app.get('/session', (req, res) => {
  terra
    .generateWidgetSession('refID', 'EN', ['GARMIN', 'FITBIT'])
    .then((s) => res.send(s.url))
    .catch((e) => console.log(e));
});

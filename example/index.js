const { default: Terra } = require("terra-api");
require("dotenv").config();

// setup a new object instance
const terra = new Terra(process.env.DEV_ID, process.env.API_KEY);

// ---------------------------
// Server
// ---------------------------
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// Webhook port
app.post("/hook", (req, _) => {
  const r = req.body;
  console.log(r.data);
});

app.get("/", (req, res) => {
  res.send("Hello Terra!");
});

app.get("/session", (req, res) => {
  terra
    .generateWidgetSession("refID", "EN", ["GARMIN", "FITBIT"])
    .then((s) => res.send(s.url))
    .catch((e) => console.log(e));
});

terra
  .generateWidgetSession("refID", "EN")
  .then((s) => console.log(s.url))
  .catch((e) => console.log(e));

terra
  .generateAuthToken()
  .then((s) => console.log(s))
  .catch((e) => console.log(e));

terra
  .getUsers()
  .then((res) => {
    console.log(res);
    res.users.forEach((u) => {
      if (u.provider == "OURA") {
        terra
          .getAthlete(u.user_id, false)
          .then((r) => console.log(r))
          .catch((e) => console.log(e));
        terra
          .getBody(u.user_id, new Date(), undefined, false)
          .then((r) => console.log(r))
          .catch((e) => console.log(e));
        terra
          .getDaily(u.user_id, new Date(), undefined, false)
          .then((r) => console.log(r))
          .catch((e) => console.log(e));
        terra
          .getMenstruation(u.user_id, new Date(), undefined, false)
          .then((r) => console.log(r))
          .catch((e) => console.log(e));
        terra
          .getSleep(u.user_id, new Date(), undefined, false)
          .then((r) => console.log(r))
          .catch((e) => console.log(e));
        terra
          .getActivity(u.user_id, new Date(), undefined, false)
          .then((r) => console.log(r))
          .catch((e) => console.log(e));
      }
    });
  })
  .catch((e) => console.log(e));

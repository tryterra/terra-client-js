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
  console.log(r);
  if (r["type"] === "auth") {
    terra.setCurrentUser(r.user.user_id);
    terra.getAthlete(true).then((r) => console.log(r));
  }
});

app.get("/", (req, res) => {
  res.send("Hello Terra!");
});

app.get("/session", (req, res) => {
  terra
    .generateWidgetSession("refID", ["GARMIN", "FITBIT"], "EN")
    .then((s) => res.send(s.url))
    .catch((e) => console.log(e));
});

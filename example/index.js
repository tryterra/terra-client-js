const { Terra } = require("..");
t.generateWidgetSession()
  .then((s) => console.log(s.url))
  .catch((e) => console.log(e));


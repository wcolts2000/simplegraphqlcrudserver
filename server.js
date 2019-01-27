const express = require("express");
const expressGraphQl = require("express-graphql");
const schema = require("./schema.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  "/graphiql",
  expressGraphQl({
    schema: schema,
    graphiql: true
  })
);

app.listen(PORT, () =>
  console.log(`\n=== Server running on port ${PORT} ===\n`)
);

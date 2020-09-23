const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema, buildSchema } = require("graphql");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const MessageSchema = buildSchema(`
  type Query {
    message: String
  }
`);

const schemaRoot = {
  message: () => "Hello World",
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: MessageSchema,
    rootValue: schemaRoot,
    graphiql: true,
    pretty: true,
  })
);

app.listen(3000, () => console.log("Running porta 3000"));

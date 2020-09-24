import express from "express";
import bodyParser from "body-parser";

import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

import routes from "./routes/";

import mongoose from "mongoose";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const MessageSchema = buildSchema(`
  type Query {
    message: String
  }
`);

const schemaRoot = {
  message: () => "Hello Worlds",
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

mongoose.connect("mongodb://localhost:27017/graphql", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

routes(app);

app.listen(3000, () => console.log("Running porta 3000"));

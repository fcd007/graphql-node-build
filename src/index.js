import express from "express";
import bodyParser from "body-parser";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
import Schema from "./graphql/index";
import routes from "./routes/index";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
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

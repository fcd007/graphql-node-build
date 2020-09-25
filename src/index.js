import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
import routes from "./routes/index";
import Schema from "./graphql/index";
// import { buildSchema } from "graphql";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    // schema: buildSchema(`type Query { msg: String }`),
    // rootValue: { msg: () => "Hello world 1231321321312" },
    graphiql: true,
    pretty: true,
  })
);

mongoose.connect("mongodb://localhost:27017/graphql", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

routes(app);

app.listen(3000, () => console.log("Express has been started"));

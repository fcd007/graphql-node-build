import { GraphQLInputObjectType, GraphQLString } from "graphql";

export default new GraphQLInputObjectType({
  name: "people_input",
  fields: () => ({
    // list: { type: GraphQLList(PersonObject) },
    name: { type: GraphQLString },
  }),
});

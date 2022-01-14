import { graphql, buildSchema } from "graphql";

let schema = buildSchema(`
type Query {
  hello: String
}
`);

let root = { hello: () => 'Hello world!' };

graphql({
    schema,
    source: `{hello}`,
    rootValue: root
}).then((response) => {
    console.log(response);
});
import React from "react";
import App from "../App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

const link = from([new HttpLink({ uri: "http://localhost:5000/graphql" })]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

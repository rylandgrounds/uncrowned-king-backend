const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

require("dotenv").config();
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers/");
const Workout = require("./models/WorkoutLog");
const User = require("./models/User");

const uri = process.env.ATLAS_URI;
const PORT = process.env.port || 5000;
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: ({ req }) => ({ req }),
});

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB detected! Time to dance!");
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Oiwshaw Database Connected at ${res.url}`);
  })
  .catch((err) => {
    console.error(err);
  });

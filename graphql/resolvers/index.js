const workoutsResolvers = require("./workouts");
const usersResolvers = require("./users");

module.exports = {
  Query: {
    ...workoutsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...workoutsResolvers.Mutation,
  },
};

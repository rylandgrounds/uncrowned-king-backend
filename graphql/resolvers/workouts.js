const { AuthenticationError } = require("apollo-server");

const Workout = require("../../models/WorkoutLog");
const checkAuth = require("../../utils/check-auth");

module.exports = {
  Query: {
    async getWorkouts() {
      try {
        const workouts = await Workout.find().sort({ createdAt: -1 });
        return workouts;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getWorkout(_, { workoutId }) {
      try {
        const workout = await Workout.findById(workoutId);
        if (workout) {
          return workout;
        } else {
          throw new Error("Workout not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createWorkout(_, { body }, context) {
      const user = checkAuth(context);
      console.log(user);
      const newWorkout = new Workout({
        body,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString(),
      });
      const workout = await newWorkout.save();
      return workout;
    },
    async deleteWorkout(_, { workoutId }, context) {
      const user = checkAuth(context);
      try {
        const workout = await Workout.findById(workoutId);
        if (user.username === workout.username) {
          await workout.delete();
          return "Workout deleted successfully!";
        } else {
          throw new AuthenticationError("Action not allowed!");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

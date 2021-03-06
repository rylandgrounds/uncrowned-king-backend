const { model, Schema } = require("mongoose");

const workoutSchema = new Schema({
  body: String,
  username: String,
  createdAt: String,
  points: String,
  type: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = model("Workout", workoutSchema);

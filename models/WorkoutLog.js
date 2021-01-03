const {model, Schema} = require('mongoose');


const workoutSchema = new Schema({
    type: String,
    time: Number,
    body: String,
    createdAt: String,
    username: String,
    caloriesBurned: Number,
    points: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = model('Workout', workoutSchema)
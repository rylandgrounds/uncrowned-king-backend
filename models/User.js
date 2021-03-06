const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String,
    points: Number,
    streak: Number
});

module.exports = model('User', userSchema)
const mongoose = require('mongoose');

//create a schema for the workouts
const workoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps:true})


module.exports = mongoose.model('Workout', workoutSchema)
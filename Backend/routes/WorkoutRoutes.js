const express = require("express");
const {
    getWorkouts,
    singleWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
} = require('../controller/controller')

const router = express.Router()

//get all workouts
router.get('/', getWorkouts)

//get a single workout
router.get('/:id', singleWorkout)


//create a workout
router.post('/', createWorkout)


//update a workout
router.patch('/:id', updateWorkout)


//delete a workout
router.delete('/:id', deleteWorkout)


module.exports = router
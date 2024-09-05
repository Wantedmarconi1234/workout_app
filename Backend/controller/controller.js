const express = require('express')
const mongoose = require('mongoose')
const workoutModel = require('../database/workoutScheme')

//get all workouts
const getWorkouts = async (req, res) => {
    try {
        const workout = await workoutModel.find({}).sort({createdAt: -1})
        res.status(200).json(workout);
    } catch (error) {
        res.status(404).json(error.message)
    }
}

//get a single workout
const singleWorkout = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({Error: "Invalid request id"})
    }
    if (mongoose.Types.ObjectId.isValid(id)) {
        const workout = await workoutModel.findById({_id: id})
        res.status(200).json(workout)
    }
}

//create a workout
const createWorkout = async (req, res) => {
    const newWorkout = req.body
    try {
        const workout = await workoutModel.create({...newWorkout})
        workout.save()
        res.status(200).json(workout);   
    } catch (error) {
        res.status(404).json(error.message)
    }
}


//update a workout
const updateWorkout = async (req, res) => {
    const {id} = req.params
    const updatedWorkout = req.body

    if (mongoose.Types.ObjectId.isValid(id)) {
        const workout = await workoutModel.findOneAndUpdate({_id: id}, {...updatedWorkout})
        res.status(200).json(workout)
    }

    if (!workout) {
        res.status(200).json({message: "There was no workout"})
    }

    if(!mongoose.Types.ObjectId.isValid())
    res.status(404).json({Error: "oops, there was an error. couldn't update"})
}

//delete a workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params
    
    if (mongoose.Types.ObjectId.isValid(id)) {
        const workout = await workoutModel.findOneAndDelete({_id: id})
        res.status(200).json(workout)
    }
    if(!mongoose.Types.ObjectId.isValid(id))
        res.status(404).json({Error: "oops, invalid id"})
}


module.exports = {
    getWorkouts,
    singleWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}
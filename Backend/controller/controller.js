const express = require('express')

//get all workouts
const getWorkouts = async (req, res) => {
    res.status(200).json("Get all workouts");
}

//get a single workout
const singleWorkout = async (req, res) => {
    res.status(200).json("Get a single workout");
}

//create a workout
const createWorkout = async (req, res) => {
    res.status(200).json("post a workout");
}


//update a workout
const updateWorkout = async (req, res) => {
    res.status(200).json("Update a workout")
}

//delete a workout
const deleteWorkout = async (req, res) => {
    res.status(200).json("delete a workout")
}


module.exports = {
    getWorkouts,
    singleWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}
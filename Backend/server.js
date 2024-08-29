require('dotenv').config({path: '../.env'})
const mongoose = require('mongoose')
const router = require('./routes/WorkoutRoutes')
const express = require('express')

//create an express app
const app = express()

//middleware to receive request body
app.use(express.json())


//middleware for all workout routes
app.use('/app/workouts',router)


//connect to mongoDB database
mongoose.connect(process.env.DATABASE_URI)
.then(() => {
    app.listen(process.env.PORT_NUMBER, () => {
        console.log("listening to incoming requests on port 3000")
    })
})
.catch(err => {
    console.log(err.message)
})






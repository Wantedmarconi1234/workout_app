# workout_app

#Overview
The Workout Application is a full-stack project that allows users to add, delete, and edit workout entries. Each workout consists of a workout name, load (in kg), and the number of repetitions. The app uses a Node.js and Express backend, with MongoDB as the database, and a React.js frontend to deliver an intuitive user experience.

#Features
--Add Workouts: Users can add a new workout by providing a name, load, and number of repetitions.
--Edit Workouts: Users can modify their existing workouts to adjust load, repetitions, or name.
--Delete Workouts: Users can remove a workout from the list.
--Responsive UI: Simple, responsive design powered by React.js.
--Backend: API built with Node.js and Express.js.

#Database: Data stored in MongoDB.

#Technologies Used
##Frontend
--React.js - A JavaScript library for building user interfaces.
--React Query - For fetching, caching, and updating data.

#Backend
--Node.js - JavaScript runtime for backend development.
--Express.js - A web framework for Node.js.
--MongoDB - NoSQL database for storing workout data.
--Mongoose - ODM (Object Data Modeling) library for MongoDB and Node.js.

#Installation
To run the project locally, follow these steps:
##Prerequisites
--Node.js: Ensure you have Node.js installed on your machine.
--MongoDB: Set up a MongoDB instance (local or cloud-based like MongoDB Atlas).

#Steps
Clone the repository:

##bash
--git clone https://github.com/yourusername/workout-app.git
--cd workout-app
--Install server dependencies:

#Navigate to the backend folder and install necessary packages:

##bash
--cd backend
--npm install
--Install client dependencies:

#Navigate to the frontend folder and install necessary packages:

##bash
--cd ../frontend
--npm install
--Set up environment variables:

#In the backend folder, create a .env file and add your MongoDB connection string and other necessary configurations:

##bash
--MONGO_URI=your_mongo_connection_string
--PORT=4000
--Run the backend:

#From the backend folder:
##bash
--nodemon server

From the frontend folder:
##bash
--npm start

#API Endpoints
--GET /app/workouts/: Fetch all workouts.
--POST /app/workouts/: Add a new workout.
--PATCH /app/workouts/:id : Update an existing workout.
--DELETE /app/workouts/:id : Delete a workout.

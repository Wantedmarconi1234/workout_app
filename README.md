# Workout App

The **Workout App** is a MERN stack project that empowers users to manage their workout routines effectively. Whether you're lifting weights, doing bodyweight exercises, or practicing yoga, this app has you covered. Let's dive into the details!

## Overview

The **Workout Application** provides a seamless experience for fitness enthusiasts. It allows users to create, edit, and delete workout entries. Each workout entry includes essential information such as the workout name, load (in kilograms), and the number of repetitions.

## Features

- **Add Workouts**: Easily add new workouts by specifying the workout name, load, and repetitions.
- **Edit Workouts**: Modify existing workouts to adjust load, repetitions, or even rename them.
- **Delete Workouts**: Remove any unwanted workouts from your list.
- **Responsive UI**: The user interface is clean, intuitive, and built using React.js.
- **Backend Magic**: The backend is powered by Node.js and Express.js, with MongoDB as the database.

## Technologies Used

### Frontend

- **React.js**: A powerful JavaScript library for building dynamic user interfaces.
- **React Query**: Simplifies data fetching, caching, and updates.

### Backend

- **Node.js**: The JavaScript runtime for server-side development.
- **Express.js**: A robust web framework for Node.js.
- **MongoDB**: Our trusty NoSQL database for storing workout data.
- **Mongoose**: The Object Data Modeling (ODM) library that bridges MongoDB and Node.js.

## Installation

To run the project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:

- **Node.js**: Ensure Node.js is installed on your machine.
- **MongoDB**: Set up a MongoDB instance (either locally or use a cloud-based service like MongoDB Atlas).

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/workout-app.git
   cd workout-app
   ```

2. **Install Server Dependencies**:
   Navigate to the backend folder and install necessary packages:
   ```bash
   cd backend
   npm install
   ```

3. **Install Client Dependencies**:
   Navigate to the frontend folder and install necessary packages:
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set Up Environment Variables**:
   In the backend folder, create a `.env` file and add your MongoDB connection string and other necessary configurations:
   ```bash
   MONGO_URI=your_mongo_connection_string
   PORT=4000
   ```

5. **Run the Backend**:
   From the backend folder:
   ```bash
   nodemon server
   ```

6. **Start the Frontend**:
   From the frontend folder:
   ```bash
   npm start
   ```

## API Endpoints

- **GET /app/workouts/**: Fetch all workouts.
- **POST /app/workouts/**: Add a new workout.
- **PATCH /app/workouts/:id**: Update an existing workout.
- **DELETE /app/workouts/:id**: Delete a workout.

---

Feel free to copy and paste this directly into your README file. If you need any more adjustments or have other questions, just let me know! 😊

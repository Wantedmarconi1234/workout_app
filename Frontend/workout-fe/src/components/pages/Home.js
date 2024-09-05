// import { useState, useEffect } from "react"
import Workout from "./Workout"
import WorkoutForm from "./WorkoutForm"
import { useQuery } from "@tanstack/react-query"

function Home() {

//requesting for all workouts
const {data, isLoading, error} = useQuery({
  queryKey: ["workouts"],
  queryFn: async () => {
    const response = await fetch("http://localhost:4000/app/workouts/")
    if (!response.ok) {
      throw new Error("Failed to fetch workouts");
    }
    return response.json()
  },
  cacheTime: 5000,
  refetchOnReconnect: true,
  refetchInterval: 2000
})

if (isLoading) return (<div><h3>Loading...</h3></div>)
if (error) return <div><h3>Error: {error.message}</h3></div>;


  return (
    <main className="main-comp">
        <Workout data={data}/>
        <WorkoutForm />
    </main>
  )
}

export default Home
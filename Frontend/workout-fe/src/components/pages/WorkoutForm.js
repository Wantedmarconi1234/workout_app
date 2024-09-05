import { useState } from "react"
import { useMutation } from "@tanstack/react-query"


function WorkoutForm() {
const [formData, setFormData] = useState({
  title: "",
  reps: "",
  load: ""
})


//track text-inputs
const handleChange = (event) => {
  const {value, name} = event.target;
  setFormData( prevData => {
    return {
      ...prevData,
      [name] : value
    }
  })
}

//creating a workouts
const mutation = useMutation({
  mutationFn: async (newWorkout) => {
    await fetch("http://localhost:4000/app/workouts/",{
     method: "POST",
     body: JSON.stringify(newWorkout),
     headers: {
       "Content-Type": "application/json"
     },
   }).then(response => response.json())
 },
 onSuccess: (data) => {
  console.log("Data submitted successfully", data)
  setFormData({ title: "", reps: "", load: ""})
 },
 onError: (error) => {
  console.error('Error adding workout:', error);
}
})

const handleSubmit = (event) => {
  event.preventDefault()
  mutation.mutate(formData)
}


  return (
    <div className="form" >
      <h3 className="form-title">Workout Form</h3>
      <form onSubmit={handleSubmit} method="Post">
      <div>
          <label htmlFor="title">Title:</label>
          <input 
            type="text" 
            id="title"
            name="title"
            onChange={handleChange}
            value={formData.title}
            placeholder="text only"
            required
          />
        </div>
        <div>
          <label htmlFor="load">Load(kg):</label>
          <input 
            type="number" 
            id="load"
            name="load"
            onChange={handleChange}
            value={formData.load}
            placeholder="numbers only"
            required
          />
        </div>
        <div>
          <label htmlFor="reps">Reps:</label>
          <input 
            type="number" 
            id="reps"
            name="reps"
            onChange={handleChange}
            value={formData.reps}
            placeholder="numbers only"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default WorkoutForm
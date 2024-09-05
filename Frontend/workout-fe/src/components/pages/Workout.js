import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { useMutation, useQueryClient } from "@tanstack/react-query"

function Workout({data}) {
  const queryClient = useQueryClient()

  //deleting workouts
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const response = await fetch(`http://localhost:4000/app/workouts/${id}`, {
      method: "DELETE"
      });
      if(!response.ok){
        throw new Error("There was an error in request")
      }
      return await response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["workouts"]);
    }
  })

  function handleDelete(id) {
    deleteMutation.mutate(id)
  }

  return (
    <div className="workout">
        {
         data.length > 0 ? data.map( workout => (
            <div key={workout._id} className="workout-card">
                <h1 className="workout-title">{workout.title}</h1>
                <p className="workout-load"><span>Load:</span> {workout.load}</p>
                <p className="workout-reps"><span>Reps:</span> {workout.reps}</p>
                <p className="workout-createdAt">{new Date(workout.createdAt).toLocaleDateString()}</p>
                <FontAwesomeIcon icon={faTrash} 
                  className='delete-icon' 
                  onClick={() => handleDelete(workout._id)} 
                  disabled={deleteMutation.isLoading}
                />
                <FontAwesomeIcon icon={faPencil} 
                  className='edit-icon'
                />
            </div>
         )): <h3>There are no workouts</h3>
        } 
    </div>
  )
}

export default Workout


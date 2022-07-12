import { Grid, TextField, Typography } from "@mui/material"
import {useState} from 'react'

export const Todo = () => {

  const [newTask, setNewTask] = useState("")
  const [newTasks, setNewTasks] = useState([])

  const handleInputChange = (e) => {
    setNewTask(e.target.value)
  }

  const addNewTask = (e) => {
    const task = e.target.value

    if (e.key === 'Enter') {
      setNewTasks([...newTasks, task])
      setNewTask("")
    }

  }

  
  return (
    <Grid 
        container 
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        border="1px solid black"
    >
    
        <Grid item xs={4}>

        </Grid>
        
        
        <Grid item 
          xs={8} 
          sx={{mb: 2}}
        >
            <Typography variant="h2">TodoTask</Typography>

            <TextField
              type="text"
              label="Enter a new task"
              value={newTask}
              onChange={handleInputChange}
              onKeyDown={addNewTask}
            /> 

      
            {
              newTasks.map((task, index) =>{
                return(
                  <ul>
                    <li key={index}>{task}</li>
                  </ul>  
                )
              })
            } 
        </Grid>
    </Grid>
  )
}

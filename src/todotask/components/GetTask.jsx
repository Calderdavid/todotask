import { TextField, Typography } from "@mui/material"
import {useState} from 'react'
import { CheckList } from "./CheckList"


export const GetTask = () => {

    const [newTask, setNewTask] = useState("")
    const [newTasks, setNewTasks] = useState([])
    
  
    const handleInputChange = (e) => {
      setNewTask(e.target.value)
    }
  
    const addNewTask = (e) => {
      const task = e.target.value
  
      if (e.key === 'Enter' && newTask != '') {
        setNewTasks([...newTasks, task])
        setNewTask("")
      }
  
    }

  return (
    <>
        <Typography variant="h2">TodoTask</Typography>

        <TextField
            type="text"
            label="Enter a new task"
            value={newTask}
            onChange={handleInputChange}
            onKeyDown={addNewTask}
        /> 

        <CheckList task={newTasks}/>

    </>
  )
}


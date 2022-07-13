import { TextField, Typography } from "@mui/material"
import { nanoid } from 'nanoid'
import {useState} from 'react'
import { CheckList } from "./CheckList"


export const GetTask = () => {

    const [newTask, setNewTask] = useState("")
    const [newTasks, setNewTasks] = useState(['test1', 'test2', 'test3'])
  
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

        {/* <ul>
            {
                newTasks.map((task) =>{
                    const id = nanoid()
                    return(
                        <li key={id}>{task}</li>
                    )
                })
            } 
        </ul> */}
        <CheckList task={newTasks}/>

    </>
  )
}


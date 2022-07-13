import { TextField, Typography, Button } from "@mui/material"
import {useState} from 'react'
import { useForm } from "../../hooks/useForm"
import { CheckList } from "./CheckList"
import { useDispatch, useSelector } from "react-redux"
import { addNewTask } from '../../store/todotask/thunks'

export const GetTask = () => {
    
  const dispatch = useDispatch()
  const [newTasks, setNewTasks] = useState([{}])
     
  const [formValues, onInputChange] = useForm({
      description: 'new task',
      category: 'personal'
  });

  const { description, category } = formValues;


  const onSubmit = (e) => {
      e.preventDefault()
      dispatch(addNewTask({description, category}))
  }    
  
  

  return (
    <>
        <Typography variant="h2">TodoTask</Typography>

        <form onSubmit={onSubmit}>
          <TextField
              type="text"
              label="Enter a new task"
              name="description"
              value={description}
              onChange={onInputChange}
              // onKeyDown={addNewTask}
          /> 

          <TextField 
            type="text"
            label="Type of category"
            name="category"
            value={category}
            sx={{ml: 1}}
            onChange={onInputChange}
          />

          <Button type="submit" size="medium" variant="contained" sx={{ml: 1, mt: 1}}>add</Button>

        </form>


        <CheckList task={newTasks}/>

    </>
  )
}


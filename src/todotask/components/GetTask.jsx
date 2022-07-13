import { TextField, Typography, Button } from "@mui/material"
import {useState} from 'react'
import { useForm } from "../../hooks/useForm"
import { CheckList } from "./CheckList"
import { useDispatch } from "react-redux"
import { addNewTask } from '../../store/todotask/thunks'


export const GetTask = () => {
    
  const dispatch = useDispatch()
  const [newTasks, setNewTasks] = useState([{}])
     
  const [formValues, onInputChange, reset] = useForm({
      description: '',
      category: ''
  });

  const { description, category } = formValues;


  const onSubmit = (e) => {
      e.preventDefault()
      dispatch(addNewTask({description, category}))
      
      const temp = {
        description: description,
        category: category,
      }

      setNewTasks([...newTasks, temp])
      reset()
  }    

  return (
    <>
        <Typography variant="h2" sx={{color: '#EA5959', mb: 2}}><strong>TodoTask</strong></Typography>

        <form onSubmit={onSubmit}>
          <TextField
              type="text"
              label="Enter a new task"
              name="description"
              value={description}
              onChange={onInputChange}
          /> 

          <TextField 
            type="text"
            label="Type of category"
            name="category"
            value={category}
            sx={{ml: 1}}
            onChange={onInputChange}
          />

          <Button type="submit" size="medium" variant="contained" sx={{ml: 1, mt: 1, backgroundColor: '#EA5959'}}>add</Button>

        </form>

        {
          newTasks.length === 1
          ? 
          <Typography variant="span" sx={{mt: 2, color: '#eb4d4b', display: 'block' }}>no task assigned yet</Typography>
          :
          <CheckList task={newTasks}/>
        }

    </>
  )
}


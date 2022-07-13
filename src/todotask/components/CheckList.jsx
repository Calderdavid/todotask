import { useState, useEffect } from 'react';
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Checkbox,
    IconButton, 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const CheckList = ({task}) =>{

  const [checked, setChecked] = useState([]);
  const [newTask, setNewTask] = useState([]);

  useEffect(() => {
    setNewTask([...task])
  }, [task])
  


  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleDelete = (value) => () => {

    const currentIndex = newTask.indexOf(value)
    const cloneList = [...newTask]

    cloneList.splice(currentIndex, 1)

    setNewTask(cloneList)
  }

  return (
  
    <List sx={{ width: '100%',mt: 2, maxWidth: 360, borderRadius: '5px'}}>
      {newTask.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments" onClick={handleDelete(value)}>
                <DeleteIcon/>
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  )
}

import { Grid } from "@mui/material"
import { GetTask } from "./components/GetTask"
import { Divider } from '@mui/material';


export const Todo = () => {

  
  return (
    <Grid 
        container 
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        border="2px solid black"
        borderRadius="5px"
        sx={{backgroundColor: 'white'}}
    >
    
        <Grid item xs>
          {/* Componente */}
        </Grid>
        
        <Divider orientation="vertical" flexItem></Divider>

        <Grid item 
          xs={8} 
          sx={{mb: 2}}
        >
          <GetTask />

        </Grid>
    </Grid>
  )
}

import { Grid } from "@mui/material"
import { GetTask } from "./components/GetTask"


export const Todo = () => {

  
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
          {/* Componente */}
        </Grid>
        
        
        <Grid item 
          xs={8} 
          sx={{mb: 2}}
        >
          <GetTask />

        </Grid>
    </Grid>
  )
}

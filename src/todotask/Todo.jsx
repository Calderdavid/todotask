import { Grid, Typography } from "@mui/material"

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
    
        <Grid item xs={4} backgrouncolor="red">

        </Grid>
        
        
        <Grid item xs={8}>
            <Typography variant="h2">TodoTask</Typography>
        </Grid>

    </Grid>
  )
}

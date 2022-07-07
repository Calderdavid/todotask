import { Grid, TextField, Typography, Button } from "@mui/material"

export const LoginPage = () => {
    
    return (

    <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
    >
        <Grid item xs={12}>
            <Typography variant="h3">Login</Typography>       
        </Grid>
        <Grid item xs={12} marginTop={-1}>
            <Typography variant="body1"> 
                <span>Please enter your login and password!</span>
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <TextField 
                label="Email" 
                type="email" 
                placeholder="example@gmail.com" 
                fullWidth 
                name="email"
            />
        </Grid>
        <Grid item xs={12} marginTop={-1}>
            <TextField 
                label="Password" 
                type="password" 
                placeholder="password" 
                fullWidth 
                name="password"
            />
        </Grid>
        <Grid item xs={12} marginTop={-1}>
            <Typography variant="body1"> 
                <span>Please enter your login and password!</span>
            </Typography>
        </Grid>

        <Grid item xs={12}>
            <Button variant="contained">Login</Button>
        </Grid>

        <Grid item xs={12} >
            <Typography variant="body1"> 
                <span>Don't have an account?</span>
                <a href=""><strong>Sign Up</strong></a>
            </Typography>
        </Grid>
    </Grid>

  )
}

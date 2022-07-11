import { Grid, TextField, Typography, Button } from "@mui/material"
import { useForm } from "../hooks/useForm"
import {useDispatch, useSelector} from 'react-redux'

export const LoginPage = () => {
    
    const {email, password, onInputChange} = useForm({
        email: '',
        password: ''
    })

    const dispatch = useDispatch()
    
    const onSubmit = (e) => {
        console.log('works')
        e.preventDefault();
        dispatch(login())

    }
    
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
                value={email}
                onChange={onInputChange}
            />
        </Grid>
        <Grid item xs={12} marginTop={-1}>
            <TextField 
                label="Password" 
                type="password" 
                placeholder="password" 
                fullWidth 
                name="password"
                value={password}
                onChange={onInputChange}
            />
        </Grid>
        <Grid item xs={12} marginTop={-1}>
            <Typography variant="body1"> 
                <span>Please enter your login and password!</span>
            </Typography>
        </Grid>

        <Grid item xs={12}>
            <Button variant="contained" type="submit" onClick={onSubmit}>Login</Button>
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

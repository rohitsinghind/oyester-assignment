import React,{useState, useEffect} from 'react'
import { styles } from './styles';
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {loginUser} from "../../store/Actions/User"


import {Container,Paper,Typography,TextField,OutlinedInput,InputLabel,InputAdornment,FormControl,IconButton,Button,Divider,Alert} from '@mui/material';

import {Visibility, VisibilityOff} from '@mui/icons-material';

export default function Login() {

    const [creds, setCreds] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false)

    const dispatch = useDispatch();

    const {error} = useSelector((state)=> state.user);

    const [alert, setAlert] = useState("")


    const handleChange = (key) => {
        key.preventDefault();
        setCreds({ ...creds, [key.target.id]: key.target.value });
      };
    
      const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
      };
    
      const loginHandler = (e) => {
        e.preventDefault();
        dispatch(loginUser(creds.email, creds.password))
      }

      useEffect(() => {
        if(error){
          setAlert(error)
          setTimeout(() => {
            setAlert("");
          }, 3000);
          dispatch({type: "clearErrors"});
        }
       
      }, [error,dispatch,setAlert])

  return (
    <>
        <Container maxWidth="xl" sx={styles.box}>
        {alert?<Alert sx={styles.alert} severity="error">{alert}</Alert>:""}
        <Paper variant="outlined" sx={{ p: 4 }}>
            <Typography
                sx={styles.textLogo} >
                Login
            </Typography>
            <TextField
          id="email"
        type="email"
          label="Enter your Email"
          placeholder="Email"
          value={creds.email || ''}
          onChange={handleChange}
          sx={styles.center}
        />
        <div style={styles.center}>
        <FormControl variant="outlined" sx={{mt:2, width: '28ch'}}>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="password"
            placeholder="*****"
            type={showPassword ? 'text' : 'password'}
            value={creds.password || ''}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </div>
        <div style={styles.center}>
        <Button 
        variant="contained" 
        sx={styles.loginBtn} 
        onClick={loginHandler}
        >Log in
        </Button>
        </div>
        <Divider sx={styles.divider}/>
        <Typography
            sx={styles.signupText1} >
            Don't have an account? <Link to="/signup" style={{textDecoration:'none'}}><Typography
            sx={styles.signupText2} >
            Sign up
        </Typography></Link>
        </Typography>
        </Paper>
        </Container>
    </>
  )
}

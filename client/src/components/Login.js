import React, { Fragment, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const [errorMessage, setErrorMessage] = useState(false);

  const { email, password } = inputs;

  const onChangeEmail = e =>
    setInputs({ ...inputs, email: e.target.value });
    
  const onChangePassword = e =>
    setInputs({ ...inputs, password: e.target.value });

    const onSubmitForm = async e => {
      e.preventDefault();
      try {
        const body = { email, password };
        const response = await fetch(
          "/authentication/login",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(body)
          }
        );
  
        const parseRes = await response.json();
        console.log(parseRes);

       if(parseRes === "Λάθος στοιχεία!"){
         setErrorMessage("Λάθος στοιχεία!")
       }else if(parseRes === "Συμπληρώστε τα πεδία"){
        setErrorMessage("Συμπληρώστε τα πεδία!")
      }else if(parseRes === "Λάθος Email"){
        setErrorMessage("Λάθος Email!")
      }else if (parseRes.jwtToken) {
        localStorage.setItem("Token", parseRes.jwtToken);
        setAuth(true);
      } else {
        setAuth(false);
      }
      } catch (err) {
        console.error(err.message);
      }
    };
  

  return (
    <Fragment>
    <Fragment>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={onSubmitForm} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={e => onChangeEmail(e)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={e => onChangePassword(e)}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >Sign In
            </Button>
            <Grid>
              { errorMessage && <Alert severity="error">{errorMessage}</Alert>} 
            </Grid>
          </Box>
        </Box>
      </Container>
    </Fragment>
    </Fragment>
  );
};

export default Login;
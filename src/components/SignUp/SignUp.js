import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { RouteLink, RedirectRoute } from '../Router/index';
import { GuageIotVersion } from '../Utils/Utils';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignUp = () => {
  const classes = useStyles();

  const [email, setEmail] = useState(''); //Form email input
  const [password, setPassword] = useState(''); //Form password input
  const [firstName, setFirstName] = useState(''); //Form firtName input
  const [lastName, setLastName] = useState(''); //Form lastName input
  const [accountCreated, setAccountCreated] = useState(false); // if account was successfully created it is setted true

  // handles the form submit
  const submitHandler = e => {
    e.preventDefault();
    console.log('form submited!');
    console.log(firstName + ' ' + lastName + ' ,' + email + ' ,' + password);
    // TODO: Register the new user in the database
    // TODO: If the email is already registered we can have two situations below:
    // TODO: 1 - The user is already verified. In this case a popup should appear asking
    // if the user wants to login of recovery its password
    // TODO: 2 - The user account was not verified. In this case a popup should appear asking
    // if the user wants to receive a new verification email.

    // TODO: Redirects to the successful registration page
    setAccountCreated(true);
  };

  if (accountCreated) return <RedirectRoute to='/signin' />;

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form onSubmit={submitHandler} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                margin='dense'
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
                onChange={e => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                margin='dense'
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='lname'
                onChange={e => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                margin='dense'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                type='email'
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                margin='dense'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                margin='dense'
                required
                fullWidth
                name='confirm-password'
                label='Confirm Password'
                type='password'
                id='confirm-password'
                autoComplete='current-password'
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <RouteLink to='/signin'>
                <Link href='#' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </RouteLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <GuageIotVersion />
      </Box>
    </Container>
  );
};

export default SignUp;

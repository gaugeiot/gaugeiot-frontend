import React, { useState } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Internal Components
import { RouteLink, RedirectRoute } from '../Router/index';
import { GuageIotVersion } from '../Utils/Utils';
import ResetPasswordModal from './ResetPasswordModal';
import AccountExistModal from './AccountExistModal';
import AccountCreatedModal from './AccountCreatedModal';

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
  const initialErros = {
    password: {
      status: false,
      msg: ''
    }
  };

  const [email, setEmail] = useState(''); //Form email input
  const [password, setPassword] = useState(''); //Form password input
  const [confirmPassword, setConfirmPassword] = useState(''); //Form confirm password input
  const [firstName, setFirstName] = useState(''); //Form firtName input
  const [lastName, setLastName] = useState(''); //Form lastName input
  const [accountCreated, setAccountCreated] = useState(false); // if account was successfully created it is setted true
  const [errors, setErrors] = useState(initialErros);

  // states related to modals
  const [openResetPswdModal, setOpenResetPswdModal] = useState(false);
  const [openVerificationEmail, setOpenVerificationEmail] = useState(false);
  const [openAccountCreatedModal, setOpenAccountCreatedModal] = useState(false);

  // handles the form submit
  const submitHandler = e => {
    e.preventDefault();
    //TODO: Remove logs
    console.log('form submited!');
    //TODO: Remove logs
    console.log(
      firstName +
        ' ' +
        lastName +
        ' ,' +
        email +
        ' ,' +
        password +
        ',' +
        confirmPassword
    );
    // Reset errors
    setErrors(initialErros);
    // Checks if both passwords provided are equal
    if (password !== confirmPassword) {
      setErrors({
        ...errors,
        password: {
          ...errors.password,
          status: true,
          msg: "Passwords don't match!"
        }
      });
      return;
    }
    // password should have at least 6 characters
    if (password.length < 6) {
      setErrors({
        ...errors,
        password: {
          ...errors.password,
          status: true,
          msg: 'Password should have at least 6 characters!'
        }
      });
      return;
    }
    // Register the new user in the database
    axios
      .post('/api/auth/signup', {
        email,
        password,
        firstName,
        lastName
      })
      .then(res => {
        let data = res.data;
        let code = data.code;
        let msg = data.msg;

        // Checks if account exist and email wasn't verified
        // The email account was not verified. In this case a popup should appear asking
        // if the user wants to receive a new verification email.
        if (code === 0) {
          setOpenVerificationEmail(true);
          return;
        }

        // Checks if account exist and email was veirified
        // The email is already verified. In this case a popup should appear asking
        // if the user wants to login or recovery its password
        if (code === 1) {
          setOpenResetPswdModal(true);
          return;
        }

        //Checks if account was created
        //In this case show a modal to informe the user to verify
        // his email, and redirect the user to the login page
        if (code === 2) {
          setOpenAccountCreatedModal(true);
          return;
        }
      })
      .catch(err => console.log(err));
  };

  if (accountCreated) return <RedirectRoute to='/signin' />;

  return (
    <>
      <Container component='main' maxWidth='md'>
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
                  error={errors.password.status}
                  helperText={errors.password.status && errors.password.msg}
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
                  error={errors.password.status}
                  helperText={errors.password.status && errors.password.msg}
                  variant='outlined'
                  margin='dense'
                  required
                  fullWidth
                  name='confirm-password'
                  label='Confirm Password'
                  type='password'
                  id='confirm-password'
                  autoComplete='current-password'
                  onChange={e => setConfirmPassword(e.target.value)}
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

      {/* Modals */}
      <ResetPasswordModal
        open={openResetPswdModal}
        onClose={() => setOpenResetPswdModal(false)}
        email={email}
      />

      <AccountExistModal
        open={openVerificationEmail}
        onClose={() => setOpenVerificationEmail(false)}
        email={email}
      />

      <AccountCreatedModal
        open={openAccountCreatedModal}
        onClose={() => {
          setOpenAccountCreatedModal(false);
          setAccountCreated(true);
        }}
        email={email}
      />
    </>
  );
};

export default SignUp;

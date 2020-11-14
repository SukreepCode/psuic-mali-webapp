import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';

import { Box, Container, Button, TextField, Link, Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import MinimalLayout from '../layouts/Minimal/MinimalLayout';
import useStyles from './Login.style';
import { AlertMessage } from '../components';

import { useForm, Controller } from 'react-hook-form';

import { useSelector, useDispatch } from "react-redux";
import * as Auth from '../services/auth';

interface IFormInput {
  username: string;
  password: string;
  remember: boolean;
}

const Login = (props: any) => {
  const { history, loginSuccessRoute } = props;
  // Redux
  const dispatch = useDispatch();
  const auth: Auth.AuthType = useSelector(Auth.selector);

  // Form Control
  const { register, handleSubmit, control, errors } = useForm<IFormInput>();

  const [submitStatus, setSubmitStatus] = useState({
    isSubmitted: false,
    errorMessage: ""
  })

  const classes = useStyles();

  const handleBack = () => {
    history.goBack();
  };


  useEffect(() => {
    if (auth.isAuthenticated) {
        history.push(loginSuccessRoute);
      }
  }, [auth]);

  const onSubmit = async (data: IFormInput) => {
    try {
      const response = await Auth.service.login({
        username: data.username,
        password: data.password
      });
      console.log(response);
      // console.log(`before auth: ${auth.isAuthenticated}`);
      dispatch(Auth.setAuthToken(response.data.access_token));
      // console.log(`after auth: ${auth.isAuthenticated}`);
      // history.push(loginSuccessRoute);

    } catch (err: any) {
      let errorMessage = "";
      if (err.response) {
        console.log(err.response);
        errorMessage = `${err.response.data.message}`;
      } else {
        errorMessage = `${err.message}: Can't connect to the server`;
      }
      setSubmitStatus({
        isSubmitted: true,
        errorMessage
      });
    }

  };

  return (
    <MinimalLayout>
      <div className={classes.root}>
        <Container maxWidth="xs">

          <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>

            <Typography className={classes.title} variant="h2">  Sign in  </Typography>

            <TextField
              name="username"
              inputRef={register({ required: true })}
              error={errors.username && true}
              helperText={errors.username && "Username is required"}
              className={classes.textField} variant="outlined" fullWidth size="medium" label="Email address" type="text"
            />

            <TextField
              name="password"
              inputRef={register({ required: true })}
              error={errors.password && true}
              helperText={errors.password && "Password is required"}
              className={classes.textField} variant="outlined" fullWidth size="medium" label="Password" type="password"
            />

            <FormControlLabel label="Remember me"
              control={
                <Controller name="remember" control={control} defaultValue={true}
                  render={ControlledCheckbox}
                />
              } />



            <Button className={classes.LoginButton} color="primary" fullWidth size="medium" type="submit" variant="contained">
              Login
            </Button>
            <Typography color="textSecondary" variant="body1">
              Don't have an account?{' '}
              <Link component={RouterLink} to="/sign-up" variant="h6"> Sign up </Link>
            </Typography>


            {submitStatus.isSubmitted &&
              <Box my={3}>
                <AlertMessage severity="error">
                  {submitStatus.errorMessage}
                </AlertMessage>
              </Box>
            }

          </form>


        </Container>
      </div>




    </MinimalLayout>
  );
};

export default withRouter(Login);

const ControlledCheckbox = (props: any) => (
  <Checkbox
    color="primary"
    onChange={e => props.onChange(e.target.checked)}
    checked={props.value}
  />);

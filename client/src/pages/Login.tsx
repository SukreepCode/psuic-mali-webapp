import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';

import { Box, Container, Button, TextField, Link, Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import MinimalLayout from '../layouts/Minimal/MinimalLayout';
import useStyles from './Login.style';
import { Alert } from '../components';

import { useForm, Controller } from 'react-hook-form';
import { AuthService } from '../services';

interface IFormInput {
  username: string;
  password: string;
  remember: boolean;
}

const Login = (props: any) => {
  const { history, loginSuccessRoute } = props;
  
  const classes = useStyles();
  const { register, handleSubmit, control, errors } = useForm<IFormInput>();
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    console.log(errors.username);
  }, [errors.username]);

  // const handleBack = () => {
  //   history.goBack();
  // };

  const onSubmit = async (data: IFormInput) => {
    try {
      const response = await AuthService.login({
        username: data.username,
        password: data.password
      });
      console.log(response);
      history.push(loginSuccessRoute);
    } catch (err) {
      // console.log(err.response);
      setSubmitSuccess(true);
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


            {submitSuccess &&
              <Box my={3}>
                <Alert severity="error">
                  Username or password is incorrect
                 </Alert>
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

import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { Dictionary } from '../common/types'
import { Box, Grid, Button, TextField, Link, Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import MinimalLayout from '../layouts/Minimal/MinimalLayout';
import useStyles from './Login.style';

interface IFormInput {
  username: string;
  password: string;
  remember: boolean;
}

const Login = (props: any) => {
  const { history } = props;
  const classes = useStyles();
  const { register, handleSubmit, control, errors } = useForm<IFormInput>()

  useEffect(() => {
    console.log(errors.username);
  }, [errors.username]);

  const handleBack = () => {
    history.goBack();
  };

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <MinimalLayout>
      <div className={classes.root}>
        <Grid container spacing={0} direction="column" alignItems="center" justify="center" >
          <Grid item xs={12} md={3}>
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

              <FormControlLabel
                control={
                  <Controller as={Checkbox} control={control} name="remember" color="primary" defaultValue={false} />}
                label="Remember me"
              />

              <Button className={classes.LoginButton} color="primary" fullWidth size="medium" type="submit" variant="contained">
                Login
              </Button>
              <Typography color="textSecondary" variant="body1">
                Don't have an account?{' '}
                <Link component={RouterLink} to="/sign-up" variant="h6"> Sign up </Link>
              </Typography>
            </form>

          </Grid>
        </Grid>
      </div>
    </MinimalLayout>
  );
};

export default withRouter(Login);
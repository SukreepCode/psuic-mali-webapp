import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { Dictionary } from '../common/types'
import { Box, Grid, Button, TextField, Link, Typography } from '@material-ui/core';

import MinimalLayout from '../layouts/Minimal/MinimalLayout';
import useStyles from './Login.style';

const schema = {
  username: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  }
};

const Login = (props: any) => {
  const { history } = props;

  const classes = useStyles();

  const emptyDictionary: Dictionary = {};

  const [formState, setFormState] = useState({
    isValid: false,
    values: emptyDictionary,
    touched: emptyDictionary,
    errors: emptyDictionary
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleBack = () => {
    history.goBack();
  };

  const handleChange = (event: any) => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleLogin = (event: any) => {
    event.preventDefault();
    console.log(formState.values);
    // history.push('/');
  };

  const hasError = (field: string) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <MinimalLayout>
      <div className={classes.root}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >

          <Grid item xs={12} md={3}>



            <form className={classes.form} onSubmit={handleLogin}>
              <Typography className={classes.title} variant="h2">  Sign in  </Typography>

              <TextField
                className={classes.textField} variant="outlined" fullWidth size="medium" label="Email address" name="username" type="text"
                error={hasError('username')} helperText={hasError('username') ? formState.errors.username[0] : null} onChange={handleChange} value={formState.values.username || ''} />

              <TextField
                className={classes.textField} variant="outlined" fullWidth size="medium" label="Password" name="password" type="password"
                error={hasError('password')} helperText={hasError('password') ? formState.errors.password[0] : null} onChange={handleChange}
                value={formState.values.password || ''} />

              <Button className={classes.LoginButton} color="primary" disabled={!formState.isValid} fullWidth size="medium" type="submit" variant="contained">
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
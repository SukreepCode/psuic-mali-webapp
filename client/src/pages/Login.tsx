import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import validate from 'validate.js';
import useStyles from './Login.style';

import { Dictionary } from '../common/types'
import {
  Grid,
  Button,
  TextField,
  Link,
  Typography
} from '@material-ui/core';
import MinimalLayout from '../layouts/Minimal/MinimalLayout';

const schema = {
  email: {
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

  const handleSignIn = (event: any) => {
    event.preventDefault();
    history.push('/');
  };

  const hasError = (field: string) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <MinimalLayout>
      <div className={classes.root}>
        <Grid className={classes.grid} container>
          <Grid className={classes.content} item lg={7} xs={12}>
            <div className={classes.content}>
              <div className={classes.contentBody}>
                <form className={classes.form} onSubmit={handleSignIn}>
                  <Typography className={classes.title} variant="h2">
                    Sign in
                  </Typography>

                  <TextField className={classes.textField} error={hasError('email')} fullWidth helperText={hasError('email') ? formState.errors.email[0] : null} label="Email address" name="email" onChange={handleChange} type="text" value={formState.values.email ||
                    ''} variant="outlined" />
                  <TextField className={classes.textField} error={hasError('password')} fullWidth helperText={hasError('password') ? formState.errors.password[0] : null} label="Password" name="password" onChange={handleChange} type="password" value={formState.values.password
                    || ''} variant="outlined" />
                  <Button className={classes.signInButton} color="primary" disabled={!formState.isValid} fullWidth size="large" type="submit" variant="contained">
                    Login
                  </Button>
                  <Typography color="textSecondary" variant="body1">
                    Don't have an account?{' '}
                    <Link component={RouterLink} to="/sign-up" variant="h6"> Sign up
                                </Link>
                  </Typography>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </MinimalLayout>
  );
};

export default withRouter(Login);
import React from "react";
import { Helmet } from "react-helmet";
import { Container, Typography, Grid, Paper } from "@material-ui/core";
import useStyles from "./Unauthorized.style";
// import { Link } from "react-router-dom";
import Error from "./Auth/Error";

import { LOGIN_PATH } from './Routes';

const REDIRECT_COUNTDOWN = 2; // seconds

const Unauthorized = () => {
  const classes = useStyles();
  return (

    <Error
      title="Unauthorized"
      heading="Unauthorized"
      subtitle={`You don't be allowed to access this page. 
      This page will be redirected to login page in ${REDIRECT_COUNTDOWN} seconds `}
      imageUrl="/images/undraw_safe_bnk7.svg"
      isRedirect={true}
      redirectCountdown={REDIRECT_COUNTDOWN}
      redirectPath={LOGIN_PATH}
    />

  );
};

export default Unauthorized;

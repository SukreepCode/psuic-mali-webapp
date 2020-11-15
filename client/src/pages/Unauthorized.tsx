import React from "react";
import { Helmet } from "react-helmet";
import { Container, Typography, Grid, Paper } from "@material-ui/core";
import useStyles from "./Unauthorized.style";
// import { Link } from "react-router-dom";

import { LOGIN_PATH } from './Routes';

const Unauthorized = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Unauthorized</title>
        {/* <meta http-equiv="refresh" content={`2;url=${LOGIN_PATH}`} /> */}
      </Helmet>
      <Grid
        container
        justify="center"
        spacing={4}
      >
        <Grid
          item
          lg={6}
          xs={12}
        >
          <div className={classes.content}>
            <Typography variant="h1">
              Unauthorized
          </Typography>
            <Typography variant="subtitle2">
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation
          </Typography>
            <img
              alt="Under development"
              className={classes.image}
              src="/images/undraw_authentication_fsn5.svg"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Unauthorized;

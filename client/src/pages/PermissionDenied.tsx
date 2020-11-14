import React from "react";
import { Container, Typography, Grid, Paper } from "@material-ui/core";
import useStyles from "./PermissionDenied.style";
// import { Link } from "react-router-dom";

const NoPermission = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
            Permission Denied
          </Typography>
          <Typography variant="subtitle2">
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography>
          <img
            alt="Permission Denied"
            className={classes.image}
            src="/images/undraw_safe_bnk7.svg"
          />
        </div>
      </Grid>
    </Grid>
  </div>
  );
};

export default NoPermission;

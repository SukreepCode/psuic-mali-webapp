import React from "react";
import { Container, Typography, Grid, Paper } from "@material-ui/core";
import useStyles from "./NotFound.style";
// import { Link } from "react-router-dom";

const NotFound = () => {
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
            404: The page you are looking for isn’t here
          </Typography>
          <Typography variant="subtitle2">
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography>
          <img
            alt="Under development"
            className={classes.image}
            src="/images/undraw_page_not_found_su7k.svg"
          />
        </div>
      </Grid>
    </Grid>
  </div>
  );
};

export default NotFound;

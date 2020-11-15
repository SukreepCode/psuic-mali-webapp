import React from "react";
import { Helmet } from "react-helmet";
import { Container, Typography, Grid, Paper } from "@material-ui/core";
import useStyles from "./Error.style";

import { LOGIN_PATH } from '../Routes';

interface PropsType {
  isRedirect?: boolean;
  redirectCountdown?: number;
  redirectPath?: string;
  title?: string;
  heading?: string;
  subtitle?: string;
  imageUrl?: string;
}

export const Error: React.FC<PropsType> = ({
  isRedirect = false,
  redirectCountdown = 2,
  redirectPath = LOGIN_PATH,
  title = "Error",
  heading = "Error",
  subtitle = "This page is error in some reason",
  ...props
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        {isRedirect && <meta http-equiv="refresh" content={`${redirectCountdown};url=${redirectPath}`} />}
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
            <Typography className={classes.heading} variant="h1">
              {heading}
            </Typography>
            <Typography className={classes.subtitle} variant="body1">
              {subtitle}
            </Typography>
            {props.imageUrl &&
              <img
                alt={heading}
                className={classes.image}
                src={props.imageUrl}
              />
            }
          </div>

        </Grid>
      </Grid>
    </div>
  );
};

export default Error;

import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { Typography } from '@material-ui/core';

export function Alert(props: any) {
    return (
        <MuiAlert elevation={6} variant="filled" {...props}>
            <Typography variant="body1" style={{ color: 'white'}}> {props.children} </Typography>
        </MuiAlert>
    );
}

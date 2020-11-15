import React from 'react';
import { Link, } from "react-router-dom";
import { Button, Container, Typography, List, ListItem, ListItemText, Divider, ListItemSecondaryAction } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import IconButton from '@material-ui/core/IconButton';
import { MinimalLayout } from '../../layouts';


const dm1Assertment = [
  { id: "advisor", title: "Advisor", ratio: 20 },
  { id: "progress1", title: "Progress 1", ratio: 15 },
  { id: "progress2", title: "Progress 2", ratio: 15 },
  { id: "final", title: "Final Present", ratio: 20 },
  { id: "report", title: "Report", ratio: 20 }
];

const dm2Assertment = [
  { id: "advisor", title: "Advisor", ratio: 20 },
  { id: "progress1", title: "Progress 1", ratio: 15 },
  { id: "progress2", title: "Progress 2", ratio: 15 },
  { id: "final", title: "Final Present", ratio: 20 },
  { id: "report", title: "Report", ratio: 20 },
  { id: "external", title: "External", ratio: 10 }
];

const Evaluation = () => {

  // function onClick(){
  //   history.push('/student-list');
  // }
  return (
    <>
      {/* <style jsx>{`
        .title {
          font-size: 1rem;
        }
        .card {
          max-width: 150px;
        }
      `}</style> */}

      <MinimalLayout>
        <Container maxWidth="md">
          <Typography variant="h5" component="h1">
            DM I
          </Typography>

          <div className="m-3"> </div>
          <List component="nav" aria-label="secondary mailbox folders">
            {dm1Assertment.map(value => (
              <ListItem button key={value.title} >
                <ListItemText primary={value.title} />
                {value.ratio} %
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="go" >
                    <ArrowForwardIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          <div className="m-3"> </div>
          {/* DM II */}
          <Divider />
          <div className="m-5"> </div>
          <Typography variant="h5" component="h1">
            DM II
          </Typography>

          <div className="m-3"> </div>
          <List component="nav" aria-label="secondary mailbox folders">
            {dm2Assertment.map(value => (
              <ListItem button key={value.title}>
                <ListItemText primary={value.title} />
                {value.ratio} %
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="go">
                    <ArrowForwardIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Container>
      </MinimalLayout>
    </>
  );
}

export default Evaluation;
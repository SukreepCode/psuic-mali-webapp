import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import { MainLayout } from '../layouts';

const Evaluation = () => {
  return (
    <MainLayout>You're login
      <br />
      <Button color="primary">Hello World</Button>
      {/* <Button color="primary">Hello World</Button> */}
      <Link to="/">Home</Link>
      <p>
        <Link to="/logout">Logout</Link>
      </p>
    </MainLayout>
  );
}

export default Evaluation;
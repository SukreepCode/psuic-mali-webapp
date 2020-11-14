import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

const Evaluation = () => {
  return (
    <div>You're login
        <br />
      <Button color="primary">Hello World</Button>
      {/* <Button color="primary">Hello World</Button> */}
      <Link to="/">Home</Link>
      <p>
      <Link to="/logout">Logout</Link>
      </p>
    </div>
  );
}

export default Evaluation;
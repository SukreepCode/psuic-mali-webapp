import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>hello page
      <Button color="primary">Hello World</Button>
      <Link to="/evaluation">evaluation</Link>
    </div>
  );
}

export default Home;
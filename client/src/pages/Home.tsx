import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import { MinimalLayout } from '../layouts';

const Home = () => {
  return (
    <MinimalLayout>
      hello page
      <Button color="primary">Hello World</Button>
      <Link to="/evaluation">evaluation</Link>
    </MinimalLayout>
  );
}

export default Home;
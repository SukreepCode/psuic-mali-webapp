import React from 'react';
import { Button, Divider } from '@material-ui/core';
import { Link, useRouteMatch, Switch, Route, useParams } from "react-router-dom";
import { MainLayout } from '../../layouts';

const DataTable = () => {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  const params: any = useParams();

  return (
    <div>
      <h3>{params.name}</h3>
    </div>
  );
}

export default DataTable;

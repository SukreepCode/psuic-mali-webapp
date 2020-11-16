import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { DataTable } from './components';

import { withQuery, withQueryProps } from '../../common';
import { Action } from "react-fetching-library";

import { CircularProgress, Button } from '@material-ui/core';

interface PropTypes extends withQueryProps {

}

const Data = ({ loading, payload, error, onReload }: PropTypes) => {
  const params: any = useParams();

  useEffect(() => {
    onReload();
  }, []);

  return (
    <>
      <h1>{params.name} Data </h1>
      {loading && <CircularProgress style={{ margin: '100px auto' }} />}

      {error && (
        <Button onClick={onReload} variant="contained" color="secondary">
          Error, click to reload
        </Button>
      )}

      {!loading &&
        !error &&
        payload &&
        <DataTable<User>
          objects={payload}
          columns={[
            { key: "displayID", title: "Display ID" },
            { key: "username", title: "Username" },
            { key: "name", title: "Name" },
            { key: "role", title: "Role" },
          ]}
        />}

    </>
  );
}

// export default Data;

export interface User {
  id: number,
  displayID: string,
  name: string,
  username: string,
  role: string
}

// export const users: User[] = [
//   // { id: 0, name: "Thada", age: 27, email: "mildronize@gmail.com" },
//   // { id: 1, name: "Sompong", age: 35, email: "sompong@thongmeee.com" },
// ];
const token = localStorage['jwtToken'];

export default withQuery(Data, {
  method: "GET",
  endpoint: "/users",
  headers: {
    "Authorization": `bearer ${token}`
  }
} as Action<User[]>)

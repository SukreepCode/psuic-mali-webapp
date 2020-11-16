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

  useEffect(() => {
    if (payload)
      setData(payload);
  }, [loading]);

  const [data, setData] = React.useState(() => []);

  const getData = () => {
    console.log(data);
  }


  const updateMyData = (rowIndex: any, columnId: any, value: any) => {
    // We also turn on the flag to not reset the page
    // setSkipPageReset(true)
    setData((old: any) =>
      old.map((row: any, index: any) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )

  };

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
          rows={data}
          columns={[
            { key: "displayID", title: "Display ID" },
            { key: "username", title: "Username" },
            { key: "name", title: "Name" },
            { key: "role", title: "Role" },
          ]}
          updateMyData={updateMyData}
        />
      }

      <Button onClick={getData} variant="contained" color="secondary">
        Get data
        </Button>

    </>
  );
}

// export default Data;

export interface User {
  id: number,
  displayID: string,
  name: string,
  username: string,
  role: string,
  password: string;
}

const token = localStorage['jwtToken'];

export default withQuery(Data, {
  method: "GET",
  endpoint: "/users",
  headers: {
    "Authorization": `bearer ${token}`
  }
} as Action<User[]>)

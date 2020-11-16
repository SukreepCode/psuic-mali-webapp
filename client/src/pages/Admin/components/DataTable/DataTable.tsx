import React from 'react';
import { Button, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Head from './Head';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface Props<ObjectType> {
  objects: ObjectType[];
  columns: {
    key: keyof ObjectType;
    title: string;
  }[];
}


function DataTable<ObjectType>({ objects, columns }: Props<ObjectType>) {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">

          <Head columns={columns} />

          <TableBody>
            {objects.map((object: any) => (
              <TableRow key={object.id}>
                {columns.map((column) => (
                  <TableCell key={String(column.key)} align="left">
                    {object[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DataTable;

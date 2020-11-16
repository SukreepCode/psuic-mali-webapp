import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  // table: {
  //   minWidth: 650,
  // },
});


interface HeadProps {
  columns: {
    key: number | symbol | string;
    title: string;
  }[];
}

const Head = ({ columns }: HeadProps) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={String(column.key)}>{column.title}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default Head;

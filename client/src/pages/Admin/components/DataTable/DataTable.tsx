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
  editableCell:{
    border: "none",
    width: "100%",
    padding: 10
  }
});

interface Props<ObjectType> {
  rows: ObjectType[];
  columns: {
    key: keyof ObjectType;
    title: string;
  }[];
  setData: Function;
}

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData,
}: any) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue)
  const classes = useStyles();

  const onChange = (e:any) => {
    setValue(e.target.value)
  }

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value)
  }

  // If the initialValue is changed external, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <input className={classes.editableCell} value={value} onChange={onChange} onBlur={onBlur} />
}


function DataTable<ObjectType>({ rows, columns, setData }: Props<ObjectType>) {
  const classes = useStyles();

  const updateMyData = (rowIndex: any, columnId: any, value: any) => {
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
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">

          <Head columns={columns} />

          <TableBody>
            {rows.map((row:any, index:any) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={String(column.key)} align="left">
                    {/* {row[column.key]} */}
                    <EditableCell
                      value={row[column.key]}
                      row={{ index }}
                      column={{ id: column.key }}
                      updateMyData={updateMyData}
                    />
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

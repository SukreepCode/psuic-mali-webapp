import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { useTable } from 'react-table'


// Create an editable cell renderer
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
}: any) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue)

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

  return <input value={value} onChange={onChange} onBlur={onBlur} />
}


const defaultColumn = {
  Cell: EditableCell,
}

interface TableProp {
  columns: any;
  data: any;
  updateMyData: Function;
  skipPageReset?: boolean;
}

function Table({ columns, data , updateMyData, skipPageReset}: TableProp) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
    defaultColumn,
    // autoResetPage: !(skipPageReset as boolean),
  })

  // Render the UI for your table
  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableCell {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </MaUTable>
  )
}

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
    []
  )

  const [data, setData] = React.useState(() => [
    {
      id: 0,
      col1: 'Hello',
      col2: 'World',
    },
    {
      id: 1,
      col1: 'react-table',
      col2: 'rocks',
    },
    {
      id: 2,
      col1: 'whatever',
      col2: 'you want',
    },
  ]);

  const [originalData] = React.useState(data)
  const [skipPageReset, setSkipPageReset] = React.useState(false)

 // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data

  const updateMyData = (rowIndex:any, columnId:any, value:any) => {
    // We also turn on the flag to not reset the page
    // setSkipPageReset(true)
    setData((old:any) =>
      old.map((row:any, index:any) => {
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
      {/* <CssBaseline /> */}
      <Table columns={columns} data={data}
      updateMyData={updateMyData}
      />
    </div>
  )
}

export default App

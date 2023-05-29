import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Tables';

const rows = [
    {
        name: "Amazon",
        Amount: "$5000",
        profit: "$250",
        Loss: "$100",
    },
    {
        name: "Flipkart",
        Amount: "$5000",
        profit: "$4000",
        Loss: "$300",
    },
    {
        name: "Meesho",
        Amount: "$5000",
        profit: "$2200",
        Loss: "$120",
    },
    {
        name: "JioMart",
        Amount: "$5000",
        profit: "$200",
        Loss: "$100",
    },
];

function TableList() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tables-no'>Sales ($)</TableCell>
            <TableCell className='tables-no' align="right">Amount</TableCell>
            <TableCell className='tables-no' align="right">Profit&nbsp;</TableCell>
            <TableCell className='tables-no' align="right">Loss&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Amount}</TableCell>
              <TableCell align="right">{row.profit}</TableCell>
              <TableCell align="right">{row.Loss}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableList;
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

function createData(PM25, PM10, NO2, SO2, NH3, CO, Ozone, AQI, AQI_Cat) {
  return { PM25, PM10, NO2, SO2, NH3, CO, Ozone,AQI, AQI_Cat};
}

const rows = [
  createData(59.79,106.12,18.42,7.45,3.8,0.4,14.2,150,"Good"),
  createData(59.79,106.12,18.42,7.45,3.8,0.4,14.2,150,"Good"),
  createData(59.79,106.12,18.42,7.45,3.8,0.4,14.2,150,"Good"),
  createData(59.79,106.12,18.42,7.45,3.8,0.4,14.2,150,"Good"),
  createData(59.79,106.12,18.42,7.45,3.8,0.4,14.2,150,"Good"),
  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 600 , marginRight:70, float:"right",position:"relative",}} aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell  align="center">PM25</StyledTableCell>
            <StyledTableCell  align="center">PM10</StyledTableCell>
            <StyledTableCell  align="center">NO2</StyledTableCell>
            <StyledTableCell  align="center">SO2</StyledTableCell>
            <StyledTableCell  align="center">NH3</StyledTableCell>
            <StyledTableCell  align="center">CO</StyledTableCell>
            <StyledTableCell  align="center">Ozone</StyledTableCell>
            <StyledTableCell  align="center">AQI</StyledTableCell>
            <StyledTableCell  align="center">AQI Category</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
              <StyledTableCell  align="center">{row.PM25}</StyledTableCell>
              <StyledTableCell  align="center">{row.PM10}</StyledTableCell>
              <StyledTableCell  align="center">{row.NO2}</StyledTableCell>
              <StyledTableCell  align="center">{row.SO2}</StyledTableCell>
              <StyledTableCell  align="center">{row.NH3}</StyledTableCell>
              <StyledTableCell  align="center">{row.CO}</StyledTableCell>
              <StyledTableCell  align="center">{row.Ozone}</StyledTableCell>
              <StyledTableCell  align="center">{row.AQI}</StyledTableCell>
              <StyledTableCell  align="center">{row.AQI_Cat}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

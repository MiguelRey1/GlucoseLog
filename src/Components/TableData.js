import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableHeaders from "./TableHeaders";
import TableRows from "./TableRows";
import './TableData.css';

const TableData = (props) => {
  return (
    <Table >
      <TableHead>
        <TableHeaders />
      </TableHead>
      <TableBody>
        <TableRows 
        onHandleDelete={props.onHandleDelete} 
        onHandleModifier={props.onHandleModifier} 
        dataLog={props.dataLog} 
        />
      </TableBody>
    </Table>

  );
};

export default TableData;

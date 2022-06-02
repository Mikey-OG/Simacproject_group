import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
import React from 'react';

class ParticipantsTable extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    const students = this.props.students.map((student)=>{
      return (
        <TableRow>
          <TableCell align="center">{student.id}</TableCell>
          <TableCell align="center">{student.name}</TableCell>
          <TableCell align="center">{student.email}</TableCell>
          <TableCell align="center">Class</TableCell>
        </TableRow>
      )
    })

    return (
      <TableContainer component={Paper}>
        <Table style={{minWidth: 650}} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Class</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students}

          </TableBody>
        </Table>
      </TableContainer>
    );
  }
    
}

export default ParticipantsTable;
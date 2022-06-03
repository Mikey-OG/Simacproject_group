import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
import React from 'react';
import "../../styles/ParticipantsTable.css"

class ParticipantsTable extends React.Component {

	constructor(props){
		super(props)
	}

	render() {
		const participants = this.props.participants.map((participant)=>{
			return (
				<TableRow key={participant.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
				<TableCell align="center">{participant.id}</TableCell>
				<TableCell align="center">{participant.name}</TableCell>
				<TableCell align="center">{participant.email}</TableCell>
				<TableCell align="center">Class</TableCell>
				</TableRow>
			)
		})

		return (
			<TableContainer className='p-table' component={Paper}>
				<Table sx={{minWidth: 650}} size="medium" aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">ID</TableCell>
							<TableCell align="center">Name</TableCell>
							<TableCell align="center">Email</TableCell>
							<TableCell align="center">Class</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{participants}
					</TableBody>
				</Table>
			</TableContainer>
		);
	}
}

export default ParticipantsTable;
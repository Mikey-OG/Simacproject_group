import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
import "../../styles/LocationDetails.css"
import { Box } from '@material-ui/core';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

class LocationDetails extends React.Component {
	constructor(props){
		super(props)

		this.state = {selectedLocation: null, selectedLocationId: -1}
	}

	columns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'address', headerName: 'Address', width: 130 },
		{ field: 'postcode', headerName: 'Postcode', width: 130 },
		{
			field: 'capacity', headerName: 'Capacity', width: 130,
		},
		{
			field: 'tools',
			headerName: 'Tools',
			width: 160,
		}
	];

	rows = [
		{ id: 1, address: 'Snow 10', postcode: '4937LL', capacity: 35, tools:"some shit" },
		{ id: 2, address: 'Snow 14', postcode: '4937LL', capacity: 25, tools:"some shit" },
		{ id: 3, address: 'Snow 13', postcode: '4937LL', capacity: 45, tools:"some shit" },
		{ id: 4, address: 'Snow 15', postcode: '4937LL', capacity: 37, tools:"some shit" },
		{ id: 5, address: 'Snow 11', postcode: '4937LL', capacity: 20, tools:"some shit" }
	];

	onSelectLocation = (location) => {
		console.log(location)
		this.setState({selectedLocation: location, selectedLocationId: location.id});
		this.props.onSelectLocation(location.id);
	}

	render(){
		const locations = this.rows.map((location)=>{
			return (
				<TableRow className={this.state.selectedLocation === location ? "selected" : ""} onClick={()=>{this.onSelectLocation(location)}} key={location.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
					<TableCell align="center">{location.id}</TableCell>
					<TableCell align="center">{location.address}</TableCell>
					<TableCell align="center">{location.postcode}</TableCell>
					<TableCell align="center">{location.capacity}</TableCell>
					<TableCell align="center">{location.tools}</TableCell>
				</TableRow>
			)
		})
		return (

			<TableContainer className='p-table' component={Paper}>
				<Table sx={{minWidth: 650}} size="medium" aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">ID</TableCell>
							<TableCell align="center">Address</TableCell>
							<TableCell align="center">Postcode</TableCell>
							<TableCell align="center">Capacity</TableCell>
							<TableCell align="center">Tools</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{locations}
					</TableBody>
				</Table>
			</TableContainer>

			// <div id="location-container">
			// 	<Box>
			// 		<Field variant="outlined" fullWidth name="title" component={TextField} label="Title"/>
			// 	</Box>

			// 	<div style={{ height: 400, width: '100%' }}>
			// 		<DataGrid
			// 			rows={this.rows}
			// 			columns={this.columns}
			// 			pageSize={5}
			// 			rowsPerPageOptions={[5]}
			// 			checkboxSelection
			// 		/>
			// 	</div>
					
			// </div>
		);
	}

}

export default LocationDetails;
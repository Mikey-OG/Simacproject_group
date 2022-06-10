import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
import "../../styles/LocationDetails.css"
import { getAllLocations } from "../../api/Api.ts";

class LocationDetails extends React.Component {
	constructor(props){
		super(props)

		this.state = {selectedLocation: null, selectedLocationId: -1, locations: []}
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

	rows = [];

	componentDidMount() {
		getAllLocations()
		.then(res => {
			this.setState({locations: res.data})
			console.log(this.state.locations)
		})
		.catch((error) => {
			// handle error
			console.log(error);
		})
	}

	onSelectLocation = (location) => {
		this.setState({selectedLocation: location, selectedLocationId: location.id});
		this.props.onSelectLocation(location, location.id);
	}

	render(){
		const locations = this.state.locations.map((location)=>{
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
		);
	}

}

export default LocationDetails;
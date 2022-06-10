import { Box } from '@material-ui/core';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import React from "react"; 
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import InputField from '@mui/material/TextField';
import "../../styles/ExamDetails.css"

export default function ExamDetails(props){
	const [dateTime, setDateTime] = React.useState<Date | null>(new Date());

	const onSelectDateTime = () => {
		props.onSelectDateTime(dateTime.toLocaleString());
	}

	return (
		<div id="input-container">
			<Box>
				<Field variant="outlined" fullWidth name="title" component={TextField} label="Title"/>
			</Box>
			<Box>
				<Field variant="outlined" fullWidth name="type" component={TextField} label="Type" />
			</Box>
			<Box>
				<Field variant="outlined" fullWidth name="subject" component={TextField} label="Subject"/>
			</Box>
			<Box>
				<Field variant="outlined" fullWidth name="duration" component={TextField} label="Duration" />
			</Box>
			<Box>
				<Field variant="outlined" fullWidth name="description" component={TextField} label="Description" />
			</Box>
			<Box id='datePicker'>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DateTimePicker renderInput={(props) => <InputField {...props} />} label="Date-Time Picker" value={dateTime} 
						onChange={(newDate) => {
							setDateTime(newDate);
							onSelectDateTime();
						}}
					/>
					
				</LocalizationProvider>
			</Box>
		</div>
	);
}
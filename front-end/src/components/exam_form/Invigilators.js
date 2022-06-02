import React from 'react';
import { Box, Button } from '@material-ui/core';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { ParticipantsTable } from './ParticipantsTable.js';
import "../../styles/Participants.css"

class Invigilators extends React.Component {

    constructor(props){
        super(props);

        this.state = {email: ""}
    }

    handleChange = (event) => {
        this.setState({email: event.target.value});
    }

    addNewStudent = () => {
        this.props.onNewStudent(this.state.email)
    }

    render (){
        return (
            <div className="participants-container">
                <Box style={{paddingBottom: 20}}>
                    <Field value={this.state.email} onChange={this.handleChange} fullWidth variant="outlined" name={this.props.name} component={TextField} label={this.props.label} />
                </Box>
                <Button onClick={this.addNewStudent} fullWidth color="primary" variant="contained" type="button"> Add</Button>
                
                {/* {ParticipantsTable()} */}
            </div>
        );
    }
    
}

export default Invigilators;

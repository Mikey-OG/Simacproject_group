import React, { Component } from 'react'
import { Grid, Item } from '@material-ui/core';
// import {Grid} from '@mui/material';
import "../../styles/ExamConfirmation.css"

class ExamConfirmation extends React.Component {
    constructor (props) {
        super(props);
    }

    state = {}

    render() {
        return (
            <div className="examOverview">
                <Grid className='overviewGrid' container justifyContent="space-between">
                    <Grid className='item' item xs={4}>
                        <strong>Title:</strong>            
                    </Grid>
                    <Grid item xs={5}>
                        {this.props.examOverview.title}
                    </Grid>
                    <Grid className='item' item xs={4}>
                        <strong>Type:</strong> 
                    </Grid>
                    <Grid item xs={5}>
                        {this.props.examOverview.type}
                    </Grid>
                    <Grid className='item' item xs={4}>
                        <strong>Subject:</strong> 
                    </Grid>
                    <Grid item xs={5}>
                        {this.props.examOverview.subject}
                    </Grid>
                    <Grid className='item' item xs={4}>
                        <strong>Duration:</strong> 
                    </Grid>
                    <Grid item xs={5}>
                        {this.props.examOverview.duration}
                    </Grid>
                    <Grid className='item' item xs={4}>
                        <strong>Date and Time:</strong> 
                    </Grid>
                    <Grid item xs={5}>
                        {this.props.examOverview.dateTime}
                    </Grid>
                    <Grid className='item' item xs={4}>
                        <strong>Students Number:</strong> 
                    </Grid>
                    <Grid item xs={5}>
                        {this.props.examOverview.students.length}
                    </Grid>
                    <Grid className='item' item xs={4}>
                        <strong>Invigilators Number</strong> 
                    </Grid>
                    <Grid item xs={5}>
                        {this.props.examOverview.invigilators.length}
                    </Grid>

                    <Grid className='item' item xs={4}>
                        <strong>Location:</strong> 
                    </Grid>
                    <Grid item xs={5}>
                        {this.props.examOverview.location.address}
                    </Grid>
                    <Grid className='item' item xs={4}>
                        <strong>Location Capacity:</strong> 
                    </Grid>
                    <Grid item xs={5}>
                        {this.props.examOverview.location.capacity}
                    </Grid>
                    
                </Grid>
                
            </div>
        )
    }
}

export default ExamConfirmation;

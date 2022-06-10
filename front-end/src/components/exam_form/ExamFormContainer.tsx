import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import Alert from '@mui/material/Alert';

import ExamCreateDto from '../../models/dtos/ExamCreateDto.ts';
import ExamDetails from './ExamDetails.tsx';
import LocationDetails from './LocationDetails.js'
import { FormStep, FormikStepper } from './FormStep.tsx';
import Students from './Students.js';
import Invigilators from './Invigilators.js';
import Student from '../../models/Student';
import Invigilator from '../../models/Invigilator';
import ExamLocation from '../../models/ExamLocation.ts';
import ExamConfirmation from './ExamConfirmation';
import { createExam } from '../../api/Api.ts';
import '../../styles/ExamFormContainer.css'
import { ExamSchema } from '../../validations/ExamValidation.js';

// export default function
class ExamFormContainer extends React.Component<{}, {title: string, type: string, subject: string, duration: string, description: string, dateTime: string, location: ExamLocation, locationId: number, students: Student[], invigilators: Invigilator[], isReqSuccess: boolean }> {

    examCreateDto: ExamCreateDto;

    
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            type: "",
            subject: "",
            duration: "",
            description: "",
            dateTime: "",
            location: ExamLocation, 
            locationId: -1, 
            students: [], 
            invigilators: [],
            isReqSuccess: false
        }

    }

    onExamDetails = (data) => {
        this.setState({
            title: data.title,
            type: data.type,
            subject: data.subject,
            duration: data.duration,
            description: data.description
        })
    }
    
    onNewStudent = (student: Student) => {
        this.setState({students:[...this.state.students, student]})
    }

    onNewInvigilator = (invigilator: Invigilator) => {
        this.setState({invigilators:[...this.state.invigilators, invigilator]})
    }

    onSelectDateTime = (dateTime: string) => {
        this.setState({dateTime: dateTime});
    }

    onSelectLocation = (location: ExamLocation, locationId: number) => {
        this.setState({location: location, locationId: locationId});
    }

    onSubmit = (data) => {
        const {title, type, subject, duration, description, dateTime, location, students, invigilators } = this.state;
        this.examCreateDto = new ExamCreateDto(title, type, subject, dateTime, location, duration, description, students, invigilators);

        
        createExam(this.examCreateDto)
        .then(res => {
            console.log(res)
            this.setState({isReqSuccess: true})
        })
        .catch((error) => {
            // handle error
            console.log(error);
        });
    }

    render() { 
        return (
            <div>
            <h2>Create New Exam</h2>
            
            <Card variant="outlined" style={{width:"60%", marginTop: 30, marginBottom: 10, marginLeft: "auto", marginRight: "auto"}}>
                <CardContent style={{padding: 60}}>
                    <FormikStepper initialValues={{
                        title: '',
                        type: '',
                        subject: '',
                        duration: '',
                        description: '',
                    }}

                    validationSchema={ExamSchema}

                    onExamDetails={
                        (data) =>{
                            this.onExamDetails(data);
                        }
                    }

                    onSubmit={ 
                        (data) => {
                            this.onSubmit(data);
                        } 
                    }>
                        
                            <FormStep label="Exam Details">
                                <ExamDetails onSelectDateTime= { this.onSelectDateTime }>
                                </ExamDetails>  
                            </FormStep>
                            <FormStep label="Students">
                                <Students participants={this.state.students} onNewStudent= { this.onNewStudent } name="studentsEmails" label="Student Name"/>
                            </FormStep>
                            <FormStep label="Invigilators">
                                <Invigilators participants={this.state.invigilators} onNewInvigilator= { this.onNewInvigilator } name="invigilatorsEmails" label="Invigilator Name">
                                </Invigilators>
                            </FormStep>
                            <FormStep label="Location">
                                <LocationDetails onSelectLocation={ this.onSelectLocation }></LocationDetails>
                            </FormStep>
                            <FormStep label="Overview">
                                <ExamConfirmation examOverview={this.state}></ExamConfirmation>
                            </FormStep>
                            
                            
                    </FormikStepper>
                </CardContent>
            </Card>
            {this.state.isReqSuccess && <Alert id='alert' variant='outlined' severity="success">Exam has been successfully created!</Alert>}
            
            </div>
        );
    }
}

export default ExamFormContainer;
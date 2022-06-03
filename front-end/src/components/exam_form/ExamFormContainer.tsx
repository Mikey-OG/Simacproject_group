import { Card, CardContent, Box } from '@material-ui/core';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import React from 'react';
import { string } from 'yup';
import ExamCreateDto from '../../models/dtos/ExamCreateDto.ts';
import ExamDetails from './ExamDetails.tsx';
import LocationDetails from './LocationDetails.js'
import { FormStep, FormikStepper } from './FormStep.tsx';
import Students from './Students.js';
import Invigilators from './Invigilators.js';
import Student from '../../models/Student';
import Invigilator from '../../models/Invigilator';

// export default function
class ExamFormContainer extends React.Component<{}, { dateTime: string, locationId: number, students: Student[], invigilators: Invigilator[] }> {

    examCreateDto: ExamCreateDto;

    constructor(props) {
        super(props);

        this.state = {dateTime: "", locationId: -1, students: [], invigilators: []}

    }
    
    // this.setState({addedStudents: [...this.state.addedStudents, 'new value']})
    onNewStudent = (student: Student) => {
        console.log(student);
        this.setState({students:[...this.state.students, student]})
        //this.examCreateDto.students = this.students;      
    }

    onNewInvigilator = (invigilator: Invigilator) => {
        console.log(invigilator);
        this.setState({invigilators:[...this.state.invigilators, invigilator]})
        //this.examCreateDto.students = this.students; 
    }

    onSelectDateTime = (dateTime: string) => {
        this.setState({dateTime: dateTime});
        console.log(this.examCreateDto)
    }

    onSelectLocation = (locationId: number) => {
        this.setState({locationId: locationId});
    }
// public title: string, public type:string, public subject: string, public dateTime: string, public locationId: number, public duration: string, public description: string, public students: Student[], public invigilators: Invigilator[]) {

    onSubmit = (data) => {
        const { dateTime, locationId, students, invigilators } = this.state;
        this.examCreateDto = new ExamCreateDto(data.title, data.type, data.subject, dateTime, locationId, data.duration, data.description, students, invigilators);
        console.log(this.examCreateDto);
    }

    render() { 
        return (
            <Card variant="outlined" style={{width:"60%", marginTop: 30, marginBottom: 10, marginLeft: "auto", marginRight: "auto"}}>
                <CardContent style={{padding: 60}}>
                    <FormikStepper initialValues={{
                        title: '',
                        type: '',
                        subject: '',
                        date: '',
                        time: '',
                        duration: '',
                        description: '',
                        studentsEmails: [],
                        invigilatorsEmails: []
                    }} 
                    onSubmit={ (data)=>{this.onSubmit(data);console.log(data)} }>
                        
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
                            
                            
                    </FormikStepper>
                </CardContent>
            </Card>
        );
    }
}

export default ExamFormContainer;
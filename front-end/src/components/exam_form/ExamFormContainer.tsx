import { Card, CardContent, Box } from '@material-ui/core';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import React from 'react';
import { string } from 'yup';
import ExamCreateDto from '../../models/dtos/ExamCreateDto.ts';
import ExamDetails from './ExamDetails.tsx';
import { FormStep, FormikStepper } from './FormStep.tsx';
import Students from './Students.js';
import Invigilators from './Invigilators.js';
import Student from '../../models/Student';

// export default function
class ExamFormContainer extends React.Component<{}, { students: Student[] }> {

    examCreateDto: ExamCreateDto = new ExamCreateDto();


    constructor(props) {
        super(props);

        this.state = {students: []}

    }
    
    // this.setState({addedStudents: [...this.state.addedStudents, 'new value']})
    onNewStudent = (student: Student) => {
        console.log(student);
        this.setState({students:[...this.state.students, student]})
        //this.examCreateDto.students = this.students;
       
    }

    onSelectDateTime = (dateTime: string) => {
        this.examCreateDto.dateTime = dateTime;
        console.log(this.examCreateDto)
    }

    render() { 
        return (
            <Card variant="outlined" style={{width:"60%", marginTop: 10, marginBottom: 10, marginLeft: "auto", marginRight: "auto"}}>
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
                    onSubmit={ (data)=>{console.log(data)} }>
                        
                            <FormStep label="Exam Details">
                                <ExamDetails onSelectDateTime= { this.onSelectDateTime }>
                                </ExamDetails>  
                            </FormStep>
                            <FormStep label="Students">
                                <Students students={this.state.students} onNewStudent= { this.onNewStudent } name="studentsEmails" label="Student Name"/>
                            </FormStep>
                            <FormStep label="Invigilators">
                                <Invigilators onNewStudent= { this.onNewStudent } name="invigilatorsEmails" label="Invigilator Name">
                                </Invigilators>
                            </FormStep>
                            <FormStep label="Location">
                                <Box style={{paddingBottom: 20}}>
                                    <Field fullWidth variant="standard" name="description" component={TextField} label="Email" />
                                </Box>
                            </FormStep>
                            
                            
                    </FormikStepper>
                </CardContent>
            </Card>
        );
    }
}

export default ExamFormContainer;
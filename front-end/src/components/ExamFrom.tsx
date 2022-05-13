import { Button, Card, CardContent, Box, Stepper, Step, StepLabel, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { TextField } from 'formik-material-ui';
import React, { ReactNode, useState } from 'react';

export default function Home(){
    return (
        <Card variant="outlined" style={{width:"60%", marginTop: 10, marginBottom: 10, marginLeft: "auto", marginRight: "auto"}}>
            <CardContent style={{padding: 60}}>
                <FormikStepper initialValues={{
                    title: '',
                    type: '',
                    subject: '',
                    date: '',
                    time: '',
                    location: '',
                    duration: '',
                    description: ''
                }} 
                onSubmit={ ()=>{console.log("submitted")} }>
                    
                        <FormikStep label="Exam Details">
                            <Box style={{paddingBottom: 10}}>
                                <Field variant="standard" fullWidth name="title" component={TextField} label="Title"/>
                            </Box>
                            <Box style={{paddingBottom: 10}}>
                                <Field variant="standard" fullWidth name="type" component={TextField} label="Type" />
                            </Box>
                            <Box style={{paddingBottom: 10}}>
                                <Field variant="standard" fullWidth name="subject" component={TextField} label="Subject"/>
                            </Box>
                            <Box style={{paddingBottom: 10}}>
                                <Field variant="standard" fullWidth name="date" component={TextField} label="Date" />
                            </Box>
                            <Box style={{paddingBottom: 10}}>
                                <Field variant="standard" fullWidth name="time" component={TextField} label="Time" />
                            </Box>
                            <Box style={{paddingBottom: 10}}>
                                <Field variant="standard" fullWidth name="location" component={TextField} label="Location" />
                            </Box>
                            <Box style={{paddingBottom: 10}}>
                                <Field variant="standard" fullWidth name="duration" component={TextField} label="Duration" />
                            </Box>
                            <Box style={{paddingBottom: 10}}>
                                <Field variant="standard" fullWidth name="description" component={TextField} label="Description" />
                            </Box>
                        </FormikStep>
                        <FormikStep label="Invigilators">
                            <Box style={{paddingBottom: 20}}>
                                <Field fullWidth variant="standard" name="description" component={TextField} label="Email" />
                            </Box>
                            {DenseTable()}
                        </FormikStep>
                        
                        <FormikStep label="Students">
                            <Box style={{paddingBottom: 20}}>
                                <Field fullWidth variant="standard" name="description" component={TextField} label="Emails" />
                            </Box>
                            
                            {DenseTable()}
                        </FormikStep>
                </FormikStepper>
            </CardContent>
        </Card>
    );
}

export interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children'> {
    label: string;
}

export function FormikStep({ children } : FormikStepProps){
    return <>{children}</>
}

export function FormikStepper({ children, ...props } : FormikConfig<FormikValues>){
    const childrenArray = React.Children.toArray(children as ReactNode[]) as React.ReactElement<FormikStepProps>[];
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step]; 
    const [completed, setCompleted] = useState(false);

    function isLastStep(){
        return step === childrenArray.length - 1;
    }

    return(
        <Formik {...props} onSubmit={async (values, helpers) => {
            if(isLastStep()) {
                await props.onSubmit(values, helpers);
                setCompleted(true);
                //setStep(0);
                //helpers.resetForm();
            } else {
                console.log("test")
                setStep((s) => s + 1)
            }
        }}>
            <Form>
                <Stepper activeStep={step} alternativeLabel>
                    {childrenArray.map((child, index) => (
                        <Step key={child.props.label} completed={index < step || completed}>
                            <StepLabel>{child.props.label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {currentChild}

                <Grid style={{marginTop: 15}} container spacing={2} justifyContent="space-between">
                    <Grid item xs={4}>
                    {step > 0 ? <Button fullWidth color="primary" variant="contained" onClick={()=>{setStep(s=> s-1)}}>Back</Button> : null}

                    </Grid>
                    <Grid item xs={4}>
                    <Button fullWidth color="primary" variant="contained" type="submit">{isLastStep() ? 'Submit' : 'Next'}</Button>

                    </Grid>
                </Grid>

                
            </Form>
        </Formik>
    )
}

export function DenseTable() {
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
            
          </TableBody>
        </Table>
      </TableContainer>
    );
}
    
    

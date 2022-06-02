import { Button, Stepper, Step, StepLabel, Grid } from '@material-ui/core';
import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import React, { ReactNode, useState } from 'react';
import "../../styles/FormStep.css";
import ExamService from '../../services/ExamService';

export interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children'> {
    label: string;
}

export function FormStep({ children } : FormikStepProps){
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
            //Submit or next....
            if(isLastStep()) {
                await props.onSubmit(values, helpers);
                setCompleted(true);
                //setStep(0);
                //helpers.resetForm();
                // console.log('await triggerd',values)
                // ExamService.createExam(values);
            } else {
                setStep((s) => s + 1)
            }
        }}>
            <Form>
                {/* steps/labels */}
                <Stepper activeStep={step} alternativeLabel>
                    {childrenArray.map((child, index) => (
                        <Step key={child.props.label} completed={index < step || completed}>
                            <StepLabel>{child.props.label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {currentChild}
                
                {/* Next/Previous/Submit btn */}
                <Grid id="btn-container" container spacing={2} justifyContent="space-between">
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
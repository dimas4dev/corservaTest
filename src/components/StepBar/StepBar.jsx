import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import './styles.scss'

const steps = [
    {
        label: 'STEP 1',
        description: `YOUR INFO`,
    },
    {
        label: 'STEP 2',
        description:
            'SELECT PLAN',
    },
    {
        label: 'STEP 3',
        description: `ADD-ONS`,
    },
    {
        label: 'STEP 4',
        description: `SUMMARY`,
    },
];

const StepBar = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (

        <div className="stepBar">

            <Box>
                <Stepper activeStep={activeStep} orientation="vertical" sx={{ color: "white" }}>
                    {steps.map((step, index) => (
                        <Step sx={{ color: "white" }} key={step.label}>
                            <StepLabel
                                sx={{ color: "white" }}
                                className='bro'
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <Typography>{step.description}</Typography>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>All steps completed - you&apos;re finished</Typography>
                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            Reset
                        </Button>
                    </Paper>
                )}
            </Box>
        </div>

    );
}

export { StepBar }
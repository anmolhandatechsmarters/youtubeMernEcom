import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import DeleveryAddress from './DeleveryAddress';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const step = parseInt(querySearch.get('step'), 10) || 0;

  const isStepOptional = (step) => step === 1;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="px-5 sm:px-10 lg:px-20 py-10">
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={step} alternativeLabel className="flex flex-wrap justify-center">
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === steps.length ? (
          <Typography sx={{ mt: 2, mb: 1 }} className="text-center text-lg font-semibold">
            All steps completed - you're finished
          </Typography>
        ) : (
          <div className="mt-5">
            <div className="flex flex-col items-center">
              {step === 2 && <DeleveryAddress />}
              {step === 3 && <OrderSummary />}
            </div>

            <Box className="flex flex-col sm:flex-row justify-between items-center pt-4">
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                className="mb-3 sm:mb-0"
              >
                Back
              </Button>
              <Button onClick={handleNext} variant="contained" className="bg-purple-600 text-white">
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </div>
        )}
      </Box>
    </div>
  );
}

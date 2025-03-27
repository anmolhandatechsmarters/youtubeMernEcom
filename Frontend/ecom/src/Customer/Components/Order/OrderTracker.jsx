import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const OrderTracker = ({ activeStep }) => {
  const steps = [
    'Placed',
    'Order Confirmed',
    'Shipped',
    'Out for Delivery'
  ];

  return (
    <div className="p-4">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;

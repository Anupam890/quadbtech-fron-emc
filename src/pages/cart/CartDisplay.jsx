import React, { useState } from "react";
import Cart from "./steps/Cart";
import Checkout from "./steps/Checkout";
import OrderComplete from "./steps/OrderComplete";
import { Stepper, StepLabel, Step } from "@mui/material";

const CartDisplay = () => {
  const [activeStep, setActiveStep] = useState(0);

  const showStep = (step) => {
    switch (step) {
      case 0:
        return <Cart />;
      case 1:
        return <Checkout />;
      case 2:
        return <OrderComplete />;
      default:
        return 0;
    }
  };

  return (
    <div className="flex items-center flex-col justify-center p-10">
      <h2 className="text-center text-3xl font-semibold">Cart</h2>
      <div className="center-stepper">
        
        <Stepper
          activeStep={activeStep}
          orientation="horizontal"
          sx={{
            "& .MuiStepConnector-root": {
              display: "none",
            },
          }}
        >
          <Step>
            <StepLabel
              StepIconProps={{
                sx: {
                  fontSize: "2.5rem",
                },
              }}
              sx={{
                "& .MuiStepLabel-label": {
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                },
              }}
            >
              Shopping Cart
            </StepLabel>
          </Step>
          <Step>
            <StepLabel
              StepIconProps={{
                sx: {
                  fontSize: "2.5rem",
                },
              }}
              sx={{
                "& .MuiStepLabel-label": {
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                },
              }}
            >
              Checkout Details
            </StepLabel>
          </Step>
          <Step>
            <StepLabel
              StepIconProps={{
                sx: {
                  fontSize: "2.5rem",
                },
              }}
              sx={{
                "& .MuiStepLabel-label": {
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                },
              }}
            >
              Order Complete
            </StepLabel>
          </Step>
        </Stepper>

        <div className="step-content">{showStep(0)}</div>
      </div>
    </div>
  );
};

export default CartDisplay;

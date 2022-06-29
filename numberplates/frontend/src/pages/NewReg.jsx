import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getStepContent } from "../components/newreg/getStepContent";
import { Grid, Paper } from "@mui/material";

const steps = ["Registration", "Vehicle Details", "Owner Details", "Confirm"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data.get("Vehicle_Reg_Number"));
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        p: 3,
        minHeight: 440,
        position: "relative",
        borderRadius: 3
      }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Save</Button>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ mt: 6, px: 3, mb: 1 }}>
            <Grid container alignItems="center" spacing={3}>
              {getStepContent(activeStep)}
            </Grid>
          </Box>
          <Box height={50} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              pt: 2,
              position: "absolute",
              bottom: 24,
              right: 24
            }}
          >
            {!(activeStep === steps.length - 1) && (
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            )}
            <Box sx={{ flex: "1 1 auto" }} />

            {activeStep === steps.length - 1 ? (
              <Button onClick={handleSubmit} variant="contained">
                Save
              </Button>
            ) : (
              <Button onClick={handleNext} variant="contained">
                Next
              </Button>
            )}
          </Box>
        </>
      )}
    </Paper>
  );
}

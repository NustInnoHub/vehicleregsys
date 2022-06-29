import {
  Grid,
  styled,
  TextareaAutosize,
  TextField,
  Typography
} from "@mui/material";
import React from "react";

const StyledTextArea = styled(TextareaAutosize)(({ theme }) => ({
  backgroundColor: "transparent",
  outline: "none",
  borderRadius: theme.shape.borderRadius,
  color: "inherit",
  font: "inherit",
  padding: theme.spacing(2),
  width: "100%"
}));

const field = {
  Registration: [
    "Vehicle Reg Number",
    "Previous Reg Number",
    "Vehicle PIN Number",
    "Chassis Number(VlN)"
  ],

  Vehicle: [
    "Engine Number",
    "Vehicle Make",
    "Vehicle Model",
    "Vehicle Colour",
    "Vehicle Tax Class",
    "Vehicle Fuel Type",
    "Type of Body",
    "Net Mass",
    "Gross Vehicle Mass",
    "Year of Manufacture",
    "Country of import Vehicle",
    "Vehicle Reg Status",
    "Date of Zimbabwe Reg",
    "Vehicle",
    "Vehicle Restrictions/Admin marks",
    "Minimum Height"
  ],

  "Owner Details": [
    "Owner Surname",
    "Owner Name",
    "Owner ID/Passport Number",
    "Owner Phone Number",
    "Second Owner Surname",
    "Second Owner Name",
    "Date Issued",
    "Issuing Office",
    "Certificate Number",
    "Category",
    "Address",
    "City/Town"
  ]
};

export const getStepContent = (step) => {
  switch (step) {
    case 0:
      return (
        <>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Vehicle Reg Number"
              id="Vehicle_Reg_Number"
              size="small"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Previous_Reg_Number"
              size="small"
              disabled
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id="Vehicle_PIN_Number"
              label="Vehicle PIN Number"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id="Chassis_Number"
              label="Chassis Number(VlN)"
            />
          </Grid>
        </>
      );
    case 1:
      return (
        <>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id="Engine_Number"
              label="Engine Number"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id="Vehicle_Type"
              label="Vehicle Make"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id="Vehicle_Model"
              label="Vehicle Model"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id="Vehicle_Color"
              label="Vehicle Colour"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id="Vehicle_Tax_Class"
              label="Vehicle Tax Class"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id="Vehicle_Fuel_Type"
              label="Vehicle Fuel Type"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id="Type_of_Body"
              label="Type of Body"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id="Net_Mass"
              label="Net Mass"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id="Gross_Vehicle_Mass"
              label="Gross Vehicle Mass"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id="Year_of_Manufacture"
              label="Year of Manufacture"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id="Country_of_Import"
              label="Country of import Vehicle"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id="Vehicle_Registration_Status"
              label="Vehicle Reg Status"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id="Date_of_Zim_Registration"
              label="Date of Zimbabwe Reg"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id="Address_of_Registration"
              label="Address"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id="City_of_Registration"
              label="City/Town"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id="Vehicle"
              label="Vehicle"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              id="Vehicle_Restriction"
              label="Vehicle Restrictions/Admin marks"
            />
          </Grid>
        </>
      );
    case 2:
      return (
        <>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Titleholder Surname"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Titleholder Name"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Titleholder/ID Passport Number"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Owner Surname"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Owner Name"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Owner ID/Passport Number"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Owner Phone Number"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Second Owner Surname"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Second Owner Name"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Date Issued"
            />
          </Grid>
          <Grid item xs={4} lg={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              label="Issuing Office"
            />
          </Grid>
          <Grid item xs={4} lg={12}></Grid>
          <Grid item xs={12} lg={12}>
            <StyledTextArea
              minRows={4}
              cols={15}
              id="other_details"
              placeholder={`Other Details\neg.\n● Good condition\n● Exempted because of... \n`}
            />
          </Grid>
        </>
      );
    case 3:
      return Object.keys(field).map((key) =>
        field[key].map((item, index) => {
          return (
            <Grid
              item
              container
              sx={{ alignItems: "center" }}
              xs={12}
              key={`${key}-${item}-${index}`}
            >
              <Grid item xs={4} lg={5}>
                <Typography>{item}</Typography>
              </Grid>
              <Grid item xs={4} lg={7}>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  id={`${index}-${item}`}
                />
              </Grid>
            </Grid>
          );
        })
      );
    default:
      <>Empty</>;
      break;
  }
};

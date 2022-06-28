import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Paper,
  TextField
} from "@mui/material";
import React from "react";
import SaveIcon from "@mui/icons-material/Save";
import { styled, TextareaAutosize } from "@mui/material";

const StyledTextArea = styled(TextareaAutosize)(({ theme }) => ({
  backgroundColor: "transparent",
  outline: "none",
  borderRadius: theme.shape.borderRadius,
  color: "inherit",
  font: "inherit",
  padding: theme.spacing(2),
  width: "100%"
}));

const NewReg = () => {
  return (
    <Paper sx={{ px: 2, pb: 2 }}>
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Vehicle Reg Number"
            value="542"
            size="small"
            disabled
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Previous Reg Number"
            value="542"
            size="small"
            disabled
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            id="product_name"
            label="Vehicle PIN Number"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            id="product_qrcode"
            label="Chassis Number(VlN)"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            id="product_bNum"
            label="Engine Number"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Vehicle Make"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Vehicle Model"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Vehicle Colour"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Vehicle Tax Class"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Vehicle Fuel Type"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Type of Body"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Net Mass"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Gross Vehicle Mass"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Year of Manufacture"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Country of import Vehicle"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Vehicle Reg Status"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Date of Zimbabwe Reg"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Address"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="City/Town"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Vehicle"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Vehicle Restrictions/Admin marks"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Titleholder Surname"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Titleholder Name"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Titleholder/ID Passport Number"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Owner Surname"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Owner Name"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Owner ID/Passport Number"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Owner Phone Number"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Second Owner Surname"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Second Owner Name"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Date Issued"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Issuing Office"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Certificate Number"
          />
        </Grid>
        <Grid item xs={4} lg={3}>
          <Autocomplete
            size="small"
            variant="outlined"
            id="product_category"
            autoSelect
            options={[
              "Stimulants",
              "Inhalants",
              "Cannabinoids",
              "Depressants",
              "Opioids",
              "Steroids",
              "Hallucinogens",
              "Prescription drugs"
            ]}
            renderInput={(params) => <TextField label="Category" {...params} />}
          />
        </Grid>

        <Grid item xs={12} lg={9}>
          <StyledTextArea
            aria-label="minimum height"
            minRows={2}
            cols={13}
            id="product_remarks"
            placeholder="Remarks"
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <div>
          <Button
            type="submit"
            startIcon={<SaveIcon />}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </div>
      </Box>
    </Paper>
  );
};

export default NewReg;

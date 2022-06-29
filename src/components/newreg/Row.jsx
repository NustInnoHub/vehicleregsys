import React from "react";
import PropTypes from "prop-types";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const Row = (props) => {
  const { row, handleClick, isItemSelected } = props;
  return (
    <TableRow
      hover
      onClick={(event) => handleClick(event, row.Vehicle_Reg_Number)}
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.Vehicle_Reg_Number}
      selected={isItemSelected}
    >
      {/* <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId
                          }}
                        />
                      </TableCell> */}

      <TableCell>{row.Vehicle_Reg_Number}</TableCell>
      <TableCell>{row.Previous_Reg_Number}</TableCell>
      <TableCell>{row.Vehicle_PIN_Number}</TableCell>
      <TableCell>{row.Chassis_Number}</TableCell>
      <TableCell>{row.Engine_Number}</TableCell>
      <TableCell>{row.Vehicle_Make}</TableCell>
      <TableCell>{row.Vehicle_Model}</TableCell>
      <TableCell>{row.Vehicle_Colour}</TableCell>
      <TableCell>{row.Vehicle_Tax_Class}</TableCell>
      <TableCell>{row.Vehicle_Fuel_Type}</TableCell>
      <TableCell>{row.Type_of_Body}</TableCell>
      <TableCell>{row.Net_Mass}</TableCell>
      <TableCell>{row.Gross_Vehicle_Mass}</TableCell>
      <TableCell>{row.Year_of_Manufacture}</TableCell>
      <TableCell>{row.Country_of_import}</TableCell>
      <TableCell>{row.Vehicle_Reg_Status}</TableCell>
      <TableCell>{row.Date_of_Zim_Reg}</TableCell>
      <TableCell>{row.Vehicle}</TableCell>
      <TableCell>{row.Vehicle_Restri}</TableCell>
      <TableCell>{row.Minimum_Height}</TableCell>
      <TableCell>{row.Owner_Surname}</TableCell>
      <TableCell>{row.Owner_Name}</TableCell>
      <TableCell>{row.Owner_ID}</TableCell>
      <TableCell>{row.Owner_Phone_Number}</TableCell>
      <TableCell>{row.Second_Owner_Surname}</TableCell>
      <TableCell>{row.Second_Owner_Name}</TableCell>
      <TableCell>{row.Date_Issued}</TableCell>
      <TableCell>{row.Issuing_Office}</TableCell>
      <TableCell>{row.Certificate_Number}</TableCell>
      <TableCell>{row.Category}</TableCell>
      <TableCell>{row.Address}</TableCell>
      <TableCell>{row.City_Town}</TableCell>
    </TableRow>
  );
};

Row.propTypes = {
  row: PropTypes.shape({
    Vehicle_Reg_Number: PropTypes.string.isRequired,
    Previous_Reg_Number: PropTypes.string.isRequired,
    Vehicle_PIN_Number: PropTypes.string.isRequired,
    Chassis_Number: PropTypes.string.isRequired,
    Engine_Number: PropTypes.string.isRequired,
    Vehicle_Make: PropTypes.string.isRequired,
    Vehicle_Model: PropTypes.string.isRequired,
    Vehicle_Colour: PropTypes.string.isRequired,
    Vehicle_Tax_Class: PropTypes.string.isRequired,
    Vehicle_Fuel_Type: PropTypes.string.isRequired,
    Type_of_Body: PropTypes.string.isRequired,
    Net_Mass: PropTypes.string.isRequired,
    Gross_Vehicle_Mass: PropTypes.string.isRequired,
    Year_of_Manufacture: PropTypes.string.isRequired,
    Country_of_import: PropTypes.string.isRequired,
    Vehicle_Reg_Status: PropTypes.string.isRequired,
    Date_of_Zim_Reg: PropTypes.string.isRequired,
    Vehicle: PropTypes.string.isRequired,
    Vehicle_Restri: PropTypes.string.isRequired,
    Minimum_Height: PropTypes.string.isRequired,
    Owner_Surname: PropTypes.string.isRequired,
    Owner_Name: PropTypes.string.isRequired,
    Owner_ID: PropTypes.string.isRequired,
    Owner_Phone_Number: PropTypes.string.isRequired,
    Second_Owner_Surname: PropTypes.string.isRequired,
    Second_Owner_Name: PropTypes.string.isRequired,
    Date_Issued: PropTypes.string.isRequired,
    Issuing_Office: PropTypes.string.isRequired,
    Certificate_Number: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
    Address: PropTypes.string.isRequired,
    City_Town: PropTypes.string.isRequired
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  isItemSelected: PropTypes.bool.isRequired,
  labelId: PropTypes.string.isRequired
};

export default Row;

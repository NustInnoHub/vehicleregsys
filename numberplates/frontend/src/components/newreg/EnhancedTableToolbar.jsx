import React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import TableMenu from "../TableMenu";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import { Link } from "react-router-dom";

const EnhancedTableToolbar = (props) => {
  const { numSelected, dense, handleChangeDense } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            )
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Vehicle List
        </Typography>
      )}

      {numSelected > 0 && (
        <>
          <Tooltip title="Edit">
            <IconButton component={Link} to={`vehicle-edit:${2}`}>
              <BuildCircleIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      )}

      <TableMenu dense={dense} handleChangeDense={handleChangeDense} />
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};
EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  dense: PropTypes.bool.isRequired,
  handleChangeDense: PropTypes.func.isRequired
};

export default EnhancedTableToolbar;

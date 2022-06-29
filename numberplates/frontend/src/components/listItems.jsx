import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

const ListItems = [
  {
    text: "Dashboard",
    Icon: DashboardIcon,
    path: ""
  },
  {
    text: "New Vehicle Reg",
    Icon: AppRegistrationIcon,
    path: "new-registration"
  },
  {
    text: "Registered Vehicles",
    Icon: FactCheckIcon,
    path: "registered-vehicles"
  },
  {
    text: "Vehicle Edit",
    Icon: BuildCircleIcon,
    path: "vehicle-edit"
  }
];

export const MainListItems = ({ path, open }) => {
  return ListItems.map((item, index) => {
    const ListButton = (
      <ListItemButton
        key={item.text + index}
        component={Link}
        to={item.path}
        selected={path === item.path}
      >
        <ListItemIcon>
          <item.Icon />
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    );
    return open ? (
      ListButton
    ) : (
      <Tooltip title={item.text} placement="right">
        {ListButton}
      </Tooltip>
    );
  });
};

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);

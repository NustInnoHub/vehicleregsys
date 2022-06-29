import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Box, Button, styled, Toolbar, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
// import NotificationMenu from "./NotificationMenu";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const titles = {
  "new-registration": "New Vehicle Registration",
  "registered-vehicles": "Registered Vehicles",
  "vehicle-edit": "Vehicle Edit"
};

export const Navigation = ({ open, toggleDrawer, path }) => {
  let auth = useAuth();
  const title = titles[path] || "Dashboard";
  const navigate = useNavigate();

  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: "24px" // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: 2
          }}
        >
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {title}
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {/* <NotificationMenu /> */}
          <Button
            sx={{ ml: 2, fontWeight: 500, textTransform: "capitalize" }}
            color="inherit"
            onClick={() => {
              auth.logout(() => navigate("/"));
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

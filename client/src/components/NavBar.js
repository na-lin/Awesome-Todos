import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// redux
import { useFetchLoggedInUserQuery } from "../store";

// router
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  // user drop down menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // navigate user to login page once user click signin menu item
  const navigate = useNavigate();
  const handleNavToLogin = () => {
    setAnchorEl(null);
    navigate("/login");
  };

  // fetch login state
  const { data, error, isLoading } = useFetchLoggedInUserQuery();
  console.log(data, error, isLoading);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        bgcolor: "#06b6d4",
        p: 4,
      }}
    >
      <Typography variant="h4">Awesome Todos</Typography>
      <Button
        id="user-menu-button"
        aria-controls={open ? "user-menu-button" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AccountCircleIcon fontSize="large" />
      </Button>
      <Menu
        id="user-menu-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "user-menu-button",
        }}
      >
        <MenuItem onClick={handleNavToLogin}>Sign In</MenuItem>
        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </Box>
  );
}

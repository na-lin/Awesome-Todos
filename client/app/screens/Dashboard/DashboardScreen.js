import React from "react";

// MUI
import {
  Box,
  Typography,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AccountCircle from "@mui/icons-material/AccountCircle";
// todo: active color in current dashboard

// Dashboard component
import TodoDashBoardScreen from "./TodoDashBoardScreen";

export default function DashboardScreen() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <header>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 6,
            py: 2,
            justifyContent: "space-between",
          }}
        >
          <Box display={"flex"} alignItems="center">
            <img src="./images/favicon.ico" alt="logo" />
            <Typography
              variant="h5"
              sx={{ mx: 2, color: "#209CEE", fontWeight: "bold" }}
            >
              Awesome Todos
            </Typography>
          </Box>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
            >
              <AccountCircle color="#209cee" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Log out</MenuItem>
            </Menu>
          </div>
        </Box>
      </header>
      <Box display={"flex"}>
        <Box
          display="flex"
          flexDirection={"column"}
          sx={{
            px: 4,
            py: 2,
          }}
        >
          <Tooltip title="todo">
            <IconButton sx={{ color: "#209CEE" }}>
              <CheckBoxIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="journal">
            <IconButton>
              <LocalLibraryIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>
        <Box
          sx={{
            bgcolor: "#ecfeff",
            width: 1,
            height: "100vh",
            border: 1,
            borderColor: "#eee",
          }}
        >
          <Box sx={{ width: "50%", bgcolor: "#eee", height: "100vh" }}>
            <TodoDashBoardScreen />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

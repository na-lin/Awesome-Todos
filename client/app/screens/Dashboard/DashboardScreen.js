import React from "react";

// MUI
import { Box, Typography, Tooltip, IconButton, Icon } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

// todo: active color in current dashboard

// Dashboard component
import TodoDashBoardScreen from "./TodoDashBoardScreen";

export default function DashboardScreen() {
  return (
    <Box>
      <header>
        <Box sx={{ display: "flex", alignItems: "center", px: 6, py: 2 }}>
          <img src="./images/favicon.ico" alt="logo" />
          <Typography
            variant="h5"
            sx={{ mx: 2, color: "#209CEE", fontWeight: "bold" }}
          >
            Awesome Todos
          </Typography>
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

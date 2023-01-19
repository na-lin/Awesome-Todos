import React from "react";
import { Box, IconButton } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function SideBar() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "#ecfeff",
          px: 4,
          pt: 2,
          border: 1,
          height: "100vh",
        }}
      >
        <IconButton aria-label="user" size="large">
          <AccountCircleIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="task">
          <CheckBoxIcon />
        </IconButton>
        <IconButton aria-label="search">
          <ManageSearchIcon />
        </IconButton>
        <IconButton aria-label="journal" size="large">
          <AutoAwesomeIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </>
  );
}

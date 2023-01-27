import React from "react";

// MUI
import { Box } from "@mui/material";

// components
import AddTodo from "../../components/AddTodo";

export default function TodoDashBoardScreen() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", px: 4, py: 2 }}>
      <Box>
        <AddTodo />
      </Box>
      <Box sx={{ bgcolor: "#fb923c" }}>part 2: list of todo</Box>
    </Box>
  );
}

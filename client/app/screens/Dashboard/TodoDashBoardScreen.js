import React from "react";

// MUI
import { Box } from "@mui/material";

// components
import AddTodo from "../../components/AddTodo";
import TodoList from "./TodoList";

export default function TodoDashBoardScreen() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", px: 4, py: 2 }}>
      <Box>
        <AddTodo />
      </Box>
      <Box sx={{ mt: 4 }}>
        <TodoList />
      </Box>
    </Box>
  );
}

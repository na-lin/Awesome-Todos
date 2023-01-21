import React from "react";
import { Box, Divider, Stack } from "@mui/material";

// components
import AddTask from "../components/AddTask";
import TodoTasks from "../components/TodoTasks";
import CompletedOrWontDo from "../components/CompletedOrWontDo";
export default function TaskScreen() {
  return (
    <Box sx={{ bgcolor: "#bfdbfe", width: "50%" }}>
      <AddTask />
      <Stack spacing={2} direction="column">
        <TodoTasks />
        <CompletedOrWontDo />
      </Stack>
    </Box>
  );
}

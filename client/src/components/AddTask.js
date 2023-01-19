import React from "react";
import { TextField } from "@mui/material";
export default function AddTask() {
  return (
    <div>
      <TextField
        id="add-task"
        label='Add task to "Inbox". Press Enter to Save '
        variant="outlined"
        fullWidth
      />
    </div>
  );
}

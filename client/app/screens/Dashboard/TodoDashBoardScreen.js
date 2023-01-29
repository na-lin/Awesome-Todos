import React from "react";

// MUI
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// components
import AddTodo from "../../components/AddTodo";
import TodoList from "./TodoList";
import CompletedTasksList from "./completedTasksList";

export default function TodoDashBoardScreen() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", px: 4, py: 2 }}>
      <Box>
        <AddTodo />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="todoTasks-content"
            id="todoTasks-header"
          >
            <Typography>Todo</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TodoList />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="todoTasks-content"
            id="todoTasks-header"
          >
            <Typography>Completed and Won't do</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CompletedTasksList />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

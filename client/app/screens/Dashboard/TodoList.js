import React from "react";

// MUI
import { Box, List, ListItem, Divider } from "@mui/material";

// Dummy data
const tasks = [
  {
    title: "todo 1",
  },
  {
    title: "todo 2",
  },
  {
    title: "todo 3",
  },
  {
    title: "todo 4",
  },
];

export default function TodoList() {
  const renderTodoTasks = tasks.map((item) => {
    return <ListItem divider>{item.title}</ListItem>;
  });

  return <List>{renderTodoTasks} </List>;
}

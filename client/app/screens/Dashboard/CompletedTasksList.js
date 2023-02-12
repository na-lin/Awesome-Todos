import React, { useEffect } from "react";

// MUI
import { Box, List, ListItem, Divider } from "@mui/material";

// Redux
import { fetchAllTasks } from "../../store";
import { useDispatch, useSelector } from "react-redux";

export default function CompletedTasksList() {
  const dispatch = useDispatch();
  const { completedTasks } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchAllTasks());
  }, []);

  const renderTodoTasks = completedTasks.map((item) => {
    return (
      <ListItem divider key={item.id}>
        {item.title}
      </ListItem>
    );
  });

  return <List>{renderTodoTasks} </List>;
}

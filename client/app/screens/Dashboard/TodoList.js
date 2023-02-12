import React, { useEffect, useState } from "react";

// MUI
import { Box, List, ListItem, Divider, Menu, MenuItem } from "@mui/material";

// Redux
import { fetchAllTasks } from "../../store";
import { useDispatch, useSelector } from "react-redux";

export default function TodoList() {
  const dispatch = useDispatch();
  const { todoTasks } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchAllTasks());
  }, []);

  // context menu
  const [target, setTarget] = useState(null);
  const [contextMenu, setContextMenu] = useState(null);
  const handleContextMenu = (event) => {
    event.preventDefault();
    console.log(event.target);
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null
    );
  };
  const handleClose = (event) => {
    // console.log(event.target);
    setContextMenu(null);
  };

  // render todo list
  const renderTodoTasks = todoTasks.map((item) => {
    return (
      <div
        aria-id={1}
        id={item.id}
        key={item.id}
        onContextMenu={handleContextMenu}
      >
        <ListItem divider sx={{ cursor: "context-menu" }}>
          <div>{item.title}</div>
        </ListItem>
      </div>
    );
  });

  return (
    <List>
      {renderTodoTasks}
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>{" "}
    </List>
  );
}

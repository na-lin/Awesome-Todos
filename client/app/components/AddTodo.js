import React, { useState } from "react";

//MUI
import { Box, Container, IconButton, TextField, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AddTodo() {
  const [todo, setTodo] = useState("");
  const [enterTodo, setEnterTodo] = useState(false);
  const [todoIsValid, setTodoIsValid] = useState(false);

  const handleChange = (event) => setTodo(event.target.value);

  const handleBlur = () => {
    setEnterTodo(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setEnterTodo(true);
    if (todo.trim() === "") {
      setTodoIsValid(false);
    } else {
      setTodoIsValid(true);
      console.log(todo);
    }
  };

  const todoInputIsInValid = !todoIsValid && enterTodo;

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Add task, Press Enter to save"
        variant="outlined"
        onChange={handleChange}
        onBlur={handleBlur}
        error={todoInputIsInValid}
        helperText={todoInputIsInValid && "Todo content can't be empty."}
      />
    </form>
  );
}

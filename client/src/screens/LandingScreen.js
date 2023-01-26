import React from "react";

import logo from "../images/favicon.ico";
import hero from "../images/hero-img.svg";
// MUI
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  ImageList,
  ImageListItem,
  Stack,
} from "@mui/material";
import { Container } from "@mui/system";

export default function LandingScreen() {
  return (
    <div style={{ backgroundColor: "#ecfeff" }}>
      <Container sx={{ height: "100vh", pt: 4 }}>
        <header>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" />
            <Typography
              variant="h5"
              sx={{ mx: 2, color: "#209CEE", fontWeight: "bold" }}
            >
              Awesome Todos
            </Typography>
          </Box>
        </header>
        <main>
          <Box sx={{ display: "flex", alignItems: "center", mt: 8 }}>
            <div>
              <Typography variant="h4">
                Not Only a task management toolkit, but also your accomplishment
                journal
              </Typography>
              <Button variant="outlined">
                <Typography>Login/Register</Typography>
              </Button>
            </div>
            <img src={hero} alt="icon" />
          </Box>
        </main>
      </Container>
    </div>
  );
}

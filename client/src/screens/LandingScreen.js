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
} from "@mui/material";
import { Container } from "@mui/system";

///* <img src={hero} alt="icon" /> */}
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
      </Container>
    </div>
  );
}

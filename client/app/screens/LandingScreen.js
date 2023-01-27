import React from "react";

// MUI
import { Box, Typography, Button, Container } from "@mui/material";

//Router
import { Link } from "react-router-dom";

export default function LandingScreen() {
  return (
    <div style={{ backgroundColor: "#ecfeff" }}>
      <Container sx={{ height: "100vh", pt: 4 }}>
        {/* Nav with icon and name */}
        <header>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src="./images/favicon.ico" alt="logo" />
            <Typography
              variant="h5"
              sx={{ mx: 2, color: "#209CEE", fontWeight: "bold" }}
            >
              Awesome Todos
            </Typography>
          </Box>
        </header>
        {/* hero section */}
        <main id="hero">
          <Box sx={{ display: "flex", alignItems: "center", mt: 8 }}>
            <div>
              <Typography variant="h4">
                Not Only a task management toolkit, but also your accomplishment
                journal
              </Typography>
              <Button variant="outlined">
                <Typography>
                  <Link to="/login">Login/Register</Link>
                </Typography>
              </Button>
            </div>
            <img src="./images/hero-img.svg" alt="icon" />
          </Box>
        </main>
      </Container>
    </div>
  );
}

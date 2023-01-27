import React, { useEffect } from "react";
import { Box, Button, TextField, Typography, CssBaseline } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

// router
import { Link } from "react-router-dom";
import { Container } from "@mui/system";

// redux
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../store";

const valiate = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of mininum 6 characters length")
    .required("Password is required"),
});

export default function LoginScreen() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: valiate,
    onSubmit: (values) => {
      // console.log(values);
      dispatch(userLogin(values));
    },
  });

  return (
    <div style={{ backgroundColor: "#ecfeff", height: "100vh" }}>
      <Container
        component="main"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          maxWidth: "xs",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: {
              sx: 1,
              sm: 500,
            },
            px: 10,
            py: 4,
            borderTop: 1,
            borderTopColor: "#209CEE",
            borderTopWidth: 4,
            borderRadius: "4px",
            bgcolor: "#fff",
            boxShadow: 3,
          }}
        >
          {/* Top */}
          <Box
            id="login--top"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 4,
            }}
          >
            <img src="./images/favicon.ico" alt="logo" />
            <Typography
              variant="h5"
              sx={{ mx: 2, color: "#209CEE", fontWeight: "bold" }}
            >
              Awesome Todos
            </Typography>
          </Box>

          {/* Middle */}
          <Typography id="heading" variant="h4" sx={{ mb: 4 }}>
            Login
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 4 }}
              id="email"
              name="email"
              label="Email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 4, width: 1 }}
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Button fullWidth color="primary" variant="contained" type="submit">
              Sign in
            </Button>
          </form>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography variant="subtitle1" sx={{ my: 2, mr: 1 }}>
              Not a member yet?
            </Typography>
            <Link to="/signup">sign up</Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

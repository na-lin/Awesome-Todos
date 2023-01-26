import React, { useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

// router
import { Link } from "react-router-dom";
import { Container } from "@mui/system";

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
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: valiate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div style={{ backgroundColor: "#ecfeff", height: "100vh" }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: 10,
            py: 4,
            borderTop: 1,
            borderTopColor: "#209CEE",
            borderTopWidth: 4,
            bgcolor: "#fff",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Box display={"flex"} flexDirection={"column"}>
              <Typography>Log In</Typography>
              <TextField
                fullWidth
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
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Sign in
              </Button>
              <Typography>
                If you haven't an account, please
                <Link to="/signup"> sign up </Link>first
              </Typography>
            </Box>
          </form>
        </Box>
      </Container>
    </div>
  );
}

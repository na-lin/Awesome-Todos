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
import { useNavigate, Link } from "react-router-dom";

// redux
import { useUserLoginMutation } from "../store";

// validate for formik
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
  const navigate = useNavigate();
  const [userLogin, { data, error, isLoading }] = useUserLoginMutation();

  useEffect(() => {
    if (data && data.token) {
      localStorage.setItem("jwt", JSON.stringify(data.token));
      navigate("/");
    }
  }, [data, navigate]);

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      navigate("/");
    }
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: valiate,
    onSubmit: (values) => {
      userLogin(values);
    },
  });

  return (
    <div>
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
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Sign in
          </Button>
          <Typography>
            If you haven't an account, please
            <Link to="/signup"> sign up </Link>first
          </Typography>
        </Box>
      </form>
    </div>
  );
}

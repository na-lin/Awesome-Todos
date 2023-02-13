import React, { useState, useEffect } from "react";

// Router
import { useNavigate } from "react-router-dom";

// React toast
import { toast } from "react-toastify";

//Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

// validator
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import isLength from "validator/lib/isLength";
import equals from "validator/lib/equals";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userSignup } from "../store";

export default function LoginScreen() {
  // Router
  const navigate = useNavigate();
  // dispatch user login
  const dispatch = useDispatch();
  const { loading, userToken } = useSelector((state) => state.user);

  useEffect(() => {
    if (userToken) {
      navigate("/");
    }
  }, [userToken]);

  // handle form validation
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    isMember: true,
  });
  const [enteredValues, setEnteredValues] = useState({
    name: false,
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleBlur = (e) => {
    const name = e.target.name;
    setEnteredValues((prev) => {
      return { ...prev, [name]: true };
    });
  };

  const toggleMember = () => {
    setValues((prev) => {
      return {
        ...prev,
        isMember: !prev.isMember,
      };
    });
    setEnteredValues({
      name: false,
      email: false,
      password: false,
      passwordConfirm: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnteredValues({
      name: true,
      email: true,
      password: true,
      passwordConfirm: true,
    });

    // check validation
    let isInvalid;
    if (values.isMember) {
      isInvalid =
        !isEmail(values.email) || !isLength(values.password, { min: 6 });
    } else {
      isInvalid =
        isEmpty(values.name) ||
        !isEmail(values.email) ||
        !isLength(values.password, { min: 6 }) ||
        !equals(values.passwordConfirm, values.password);
    }

    if (isInvalid) {
      toast.error("Please check your input.");
      return;
    }

    // dispatch login / signup action based on isMember
    if (values.isMember) {
      dispatch(userLogin({ email: values.email, password: values.password }));
    } else {
      const { name, email, password, passwordConfirm } = values;
      dispatch(userSignup({ name, email, password, passwordConfirm }));
    }

    // don't need to reset state because I disable the submit button
  };

  return (
    <Container fluid className=" p-5">
      <div className="login mx-auto">
        <h1 className="text-center mb-5 fw-bold">Welcome back!</h1>

        <Form onSubmit={handleSubmit}>
          {/* username */}
          {!values.isMember && (
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="name"
                value={values.name}
                type="text"
                placeholder="Enter your username"
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={enteredValues.name && isEmpty(values.name)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your username.
              </Form.Control.Feedback>
            </Form.Group>
          )}

          {/* email */}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              as="input"
              type="email"
              value={values.email}
              placeholder="Enter your email address"
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={enteredValues.email && !isEmail(values.email)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter valid email address.
            </Form.Control.Feedback>
          </Form.Group>

          {/* password */}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={values.password}
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={
                enteredValues.password && !isLength(values.password, { min: 6 })
              }
            />
            <Form.Control.Feedback type="invalid">
              Password is required and must have more than 6 characters
            </Form.Control.Feedback>
          </Form.Group>

          {/* password Confirm */}
          {!values.isMember && (
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="passwordConfirm"
                value={values.passwordConfirm}
                type="password"
                placeholder="Confirm your password"
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={
                  enteredValues.passwordConfirm &&
                  !equals(values.passwordConfirm, values.password)
                }
              />
              <Form.Control.Feedback type="invalid">
                Must be exactly same to your password.
              </Form.Control.Feedback>
            </Form.Group>
          )}

          {/* Submit button */}
          <Button type="submit" className="w-100 my-3 " disabled={loading}>
            {loading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              <span>{values.isMember ? "Login" : "Register"}</span>
            )}
          </Button>
        </Form>

        {/* Toggle form btw login and register */}
        <Stack
          direction="horizontal"
          gap={1}
          className="justify-content-center"
        >
          <p>{values.isMember ? "Not a member yet?" : "Already a member? "}</p>

          <p
            onClick={toggleMember}
            className="text-customize-primary text-decoration-underline cursir-pointer"
          >
            {values.isMember ? "Register" : "Login"}
          </p>
        </Stack>
      </div>
    </Container>
  );
}

import React from "react";
import Button from "react-bootstrap/Button";

// Router
import { Link } from "react-router-dom";

export default function LandingScreen() {
  return (
    <div className="landing vh-100 d-flex flex-column">
      <nav className="d-flex flex-row mx-5 py-3">
        <img src="./images/favicon.ico" alt="logo" className="h-75" />

        <p className="fs-1 ms-2 text-customize-primary fw-bold">
          Awesome Todos
        </p>
        <Link to="/login" className="ms-auto">
          <Button size="lg" className="btn-primary">
            Login / Register
          </Button>
        </Link>
      </nav>

      <div className="mx-5 d-flex flex-row">
        <div className="w-50 h-100 pt-5">
          <p className="fs-4 mb-5">
            Not Only a task management toolkit, but also your accomplishment
            journal!
          </p>
          <Link to="/login mt-5">
            <Button size="lg" className="btn-primary">
              Login / Register
            </Button>
          </Link>
        </div>

        <img
          className="ms-4 w-50 h-75"
          src="./images/hero-img.svg"
          alt="icon"
        />
      </div>
    </div>
  );
}

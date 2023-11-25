
import React, { useEffect, useState, useRef } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HostFamily from "./HostFamily";
import University from "./University";
import FirstStep from "./FirstStep";

function Type() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "university";
    navigate(path);
  };

  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  let [typeMode, setTypeMode] = useState("student");

  const changeTypeMode = () => {
    setTypeMode(typeMode === "student" ? "hostfamily" : "student");
  };

  const formRef = useRef(); // (1) <-- React ref for form DOMNode

  function handlesubmit_task1(event) {
    event.preventDefault();
    const { value } = formRef.current.myInput; // (4) <-- access form inputs by name

    // ...anything you need to do with form fields
    console.log("handler 1", value);

    formRef.current.reset(); // (5) <-- reset form if necessary
  }

  function handlesubmit_task2(event) {
    event.preventDefault();
    const { value } = formRef.current.myInput;

    console.log("handler 2", value);

    formRef.current.reset();
  }
  function handlesubmit_task3(event) {
    event.preventDefault();
    const { value } = formRef.current.myInput;

    console.log("handler 3", value);

    formRef.current.reset();
  }
  if (authMode == "signin")
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h2 className="=" text-center>
              Welcome to EduBroad!
            </h2>
            We are happy to welcome you to our international family!
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
              <div className="form-group mt-3">
                Kindly choose your how you want to be identified:
              </div>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                variant="contained"
                type="submit"
                className="btn btn-outline-dark "
                onClick={(handlesubmit_task1)} // (3) <-- Attach submit handler 1
              >
                Student
              </button>

              <button
                variant="contained"
                color="primary"
                type="submit"
                className="btn btn-outline-dark "
                onClick={(handlesubmit_task2)} // (3) <-- Attach submit handler 2
              >
                Host Family
              </button>

              <button
                variant="contained"
                color="primary"
                type="submit"
                className="btn btn-outline-dark "
                onClick={(handlesubmit_task1)} // (3) <-- Attach submit handler 2
              >
                University
              </button>
            </div>
            if (typeMode == "student")
            <FirstStep />
            else if (typeMode == "HostFamily")
            <HostFamily />
            else
            <University />
          </div>
        </form>
      </div>
    );

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-outline-dark">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Type;

//https://www.npmjs.com/package/pure-react-carousel
/*<Link
                to="/hostfamily"
                className="nav-links"
                style={{ textDecoration: "none" }}
              >
                <button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="btn btn-outline-dark "
                  onClick={handlesubmit_task2} // (3) <-- Attach submit handler 2
                >
                  Host Family
                </button>
              </Link>*/
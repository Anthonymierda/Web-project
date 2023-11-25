import React from "react";
import StudentSlider from "../../Components/slider/Student/StudentSlider";
import UniversitySlider from "../../Components/slider/Univesity/UniversitySlider";
import FamilySlider from "../../Components/slider/HostFamily/FamilySlider";
// React Hook that lets us add a state variable to a component
import { useState } from "react";

import "./SignUp.css";

export default function SignUp() {
  let [authMode, setAuthMode] = useState("signin");
  const [selected, setSelected] = useState(false);

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };
  if (authMode === "signin")
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h2 className="text-center">
              Welcome to RoamRush!
            </h2>
            We got you covered!
            <div className="text-center">
              Already registered?{" "}
              
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
              <div className="form-group mt-3">
                Pick the reason of your booking!
              </div>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  className="btn btn-outline-dark"
                  data-bs-toggle="collapse"
                  href="#CollapseStudent"
                  aria-expanded="false"
                  aria-controls="CollapseStudent"
                  data-toggle="button"
                  disabled={selected}
                  onClick={() => setSelected(true)}
                >
                  Business
                </button>
                <button
                  className="btn btn-outline-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#CollapseUniversity"
                  aria-expanded="false"
                  aria-controls="CollapseUniversity"
                  aria-disabled="true"
                  data-toggle="button"
                  disabled={selected}
                  onClick={() => setSelected(true)}
                >
                  Vacation
                </button>
                <button
                  className="btn btn-outline-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#CollapseFamily"
                  aria-expanded="false"
                  aria-controls="CollapseFamily"
                  data-toggle="button"
                  disabled={selected}
                  onClick={() => setSelected(true)}
                >
                  Honeymoon
                </button>
              </div>
              <div className="row">
                <div className="col">
                  <div className="collapse multi-collapse" id="CollapseStudent">
                    <StudentSlider onClick={() => setSelected(false)}/>
                  </div>
                </div>

                <div className="collapse multi-collapse" id="CollapseUniversity">
                  <UniversitySlider onClick={() => setSelected(false)}/>
                </div>

                <div className="collapse multi-collapse" id="CollapseFamily">
                  <FamilySlider onClick={() => setSelected(false)} />
                </div>
              </div>
            </div>
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
            Forgot <a href="/#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Validator } from "../../../utils/validation";
const FirstStep = ({ onClick, cities = [], countries = [] }) => {
  const [selectedCountry, setSelectedCountry] = useState("Afghanistan");
  const [form, setForm] = useState();
  const [error, setError] = useState({});
  const rules = {
    firstName: "required|max:100",
    lastName: "required|max:100",
    email: "required|email|max:255",
    passwordStudent: "required",
    tel: "required|number|max:100",
  };

  const handleInputChange = (event) => {
    const field = event.target;
    const { value, id } = field;
    setForm((oldState) => ({ ...oldState, [id]: value }));
    const { success, errors } = Validator.validateField(id, value, rules[id]);

    if (success) {
      setError((oldErrors) => ({ ...oldErrors, [id]: "" }));
    } else {
      setError((oldErrors) => {
        setError((oldErrors) => ({ ...oldErrors, [id]: errors }));
        return oldErrors;
      });
    }
  };
  const handleButton = () => {
    const { success, errors } = Validator.validate(form, rules);
    if (success) {
      axios
        .post("http://localhost:3000/api/auth/register", {
          username: form.firstName,
          email: form.email,
        })
        .then(function (response) {})
        .catch(function (error) {
          setError({ error: error });
        });
    } else {
      setError((oldErrors) => ({ ...oldErrors, ...errors }));
    }
  };
  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              onChange={handleInputChange}
            />
            <div className="input-alert">{error.firstName}</div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              onChange={handleInputChange}
            />
            <div className="input-alert">{error.lastName}</div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="emailStudent"
              className="form-control"
              id="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
            <div className="input-alert">{error.email}</div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordStudent"
              placeholder="Password"
              onChange={handleInputChange}
            />
            <div className="input-alert">{error.passwordStudent}</div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="inputCountry">Country</label>
            <select
              id="inputCountryStudent"
              className="form-control"
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              {countries?.map((country, index) => (
                <option key={index}>{country}</option>
              ))}
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputCity">City</label>
            <select id="inputCityStudent" className="form-control">
              {cities[selectedCountry]?.map((city, index) => (
                <option key={index}>{city}</option>
              ))}
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="name">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="tel"
              placeholder="Phone Number"
              onChange={handleInputChange}
            />
            <div className="input-alert">{error.tel}</div>
          </div>
        </div>
        <div className="first">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              className="btn btn-outline-dark"
              onClick={onClick}
              data-bs-toggle="collapse"
              href="#CollapseStudent"
              role="button"
              aria-expanded="false"
              aria-controls="CollapseStudent"
              data-toggle="button"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-outline-dark"
              onClick={handleButton}
              href="#carouselStudent"
              role="button"
              data-slide="next"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FirstStep;

//https://www.npmjs.com/package/react-phone-number-input
//https://www.npmjs.com/package/react-tag-input-component

import React, { useEffect, useState } from "react";
import { Validator } from "../../../utils/validation";

const FirstStep = ({ onClick }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Afghanistan");
  const [cities, setCities] = useState([]);
  const [disabled, setIsDisabled] = useState(true);
  const [form, setForm] = useState();
  const [error, setError] = useState({});

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((data) => data.map((country) => country.name.common))
      .then((data) => data.sort())
      .then((data) => {
        const index = data.indexOf("Israel");
        data.splice(index, 1);
        return data;
      })
      .then((data) => setCountries(data));
  }, []);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.min.json"
    )
      .then((data) => data.json())
      .then((data) => setCities(data));
  }, []);

  const rules = {
    universityName: "required|max:100",
    urlUni: "required|url|max:100",
    emailUni: "required|email|max:255",
    passwordUni: "required",
    adressUni: "required|max:255",
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
      setIsDisabled(true);
    }
  };
  useEffect(() => {
    const { success, errors } = Validator.validate(form, rules);
    if (success) {
      setIsDisabled(false);
    }
  }, [form]);

  const handleButton = () => {};

  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="universityName">University Name</label>
            <input
              type="text"
              className="form-control"
              id="universityName"
              placeholder="University Name"
              onChange={handleInputChange}
            />
            <div className="input-alert">{error.universityName}</div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="url">URL</label>
            <input
              type="url"
              className="form-control"
              id="urlUni"
              placeholder="URL"
              onChange={handleInputChange}
            />
            <div className="input-alert">{error.urlUni}</div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstName">Email</label>
            <input
              type="email"
              className="form-control"
              id="emailUni"
              placeholder="Email"
              onChange={handleInputChange}
            />
            <div className="input-alert">{error.email}</div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="name">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordUni"
              placeholder="Password"
              onChange={handleInputChange}
            />
            <div className="input-alert">{error.passwordUni}</div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="inputCountryU">Country</label>
            <select
              id="inputCountryU"
              className="form-control"
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              {countries?.map((country, index) => (
                <option key={index}>{country}</option>
              ))}
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputCityU">City</label>
            <select id="inputCityU" className="form-control">
              {cities[selectedCountry]?.map((city, index) => (
                <option key={index}>{city}</option>
              ))}
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="adress">Address</label>
            <input
              type="text"
              className="form-control"
              id="adressUni"
              placeholder="Address"
              onChange={handleInputChange}
            />
            <div className="input-alert">{error.adressUni}</div>
          </div>
        </div>
        <div className="next">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              className="btn btn-outline-dark"
              onClick={onClick}
              data-bs-toggle="collapse"
              href="#CollapseUniversity"
              role="button"
              aria-expanded="false"
              aria-controls="CollapseUniversity"
              data-toggle="button"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-outline-dark "
              onClick={handleButton}
              href="#carouselUniversity"
              role="button"
              data-slide="next"
              disabled={disabled}
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

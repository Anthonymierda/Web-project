import React, { useEffect, useState } from "react";

/*Form validation in React allows an error message to be displayed if the user has not correctly filled out the form with the expected type of input.*/
import { Validator } from "../../../utils/validation";

const FirstStep = ({ onClick }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Afghanistan");
  const [cities, setCities] = useState([]);
  const [disabled, setIsDisabled] = useState(true);
  const [form, setForm] = useState();
  const [error, setError] = useState({});

  const rules = {
    familyName: "required|max:100",
    emailFamily: "required|email|max:255",
    passwordFamily: "required",
    adressH: "required|max:255",
  };

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
    // eslint-disable-next-line 
    const { success, errors } = Validator.validate(form, rules);
    if (success) {
      setIsDisabled(false);
    }
  }, [form]);

  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="familyName">Family's Name</label>
            <input
              type="text"
              className="form-control"
              id="familyName"
              placeholder="Family's Name"
              onChange={handleInputChange}
            />
            <div className="input-alert">{error.familyName}</div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="number">Family members' number</label>
            <div className="btn-group" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn btn-outline-dark dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Number
              </button>
              <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a className="dropdown-item" href="/#">
                  2
                </a>
                <a className="dropdown-item" href="/#">
                  3
                </a>
                <a className="dropdown-item" href="/#">
                  4
                </a>
                <a className="dropdown-item" href="/#">
                  5
                </a>
                <a className="dropdown-item" href="/#">
                  6
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstName">Email</label>
            <input
              type="email"
              className="form-control"
              id="emailFamily"
              placeholder="Email"
              onChange={handleInputChange}
            />
            <div className="input-alert">{error.emailFamily}</div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="name">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordFamily"
              placeholder="Password"
              onChange={handleInputChange}
            />
            <div className="input-alert">{error.passwordFamily}</div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="inputCountry">Country</label>
            <select
              id="inputCountryF"
              className="form-control"
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              {countries?.map((country, index) => (
                <option key={index}>{country}</option>
              ))}
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputCityF">City</label>
            <select id="inputCityF" className="form-control">
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
              id="adressH"
              placeholder="Address"
              onChange={handleInputChange}
            />
            <div className="input-alert">{error.adressH}</div>
          </div>
        </div>
        <div className="next">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              className="btn btn-outline-dark"
              onClick={onClick}
              data-bs-toggle="collapse"
              href="#CollapseFamily"
              aria-expanded="false"
              aria-controls="CollapseFamily"
              data-toggle="button"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-outline-dark"
              disabled={disabled}
              href="#carouselHostFamily"
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

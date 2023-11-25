import React, { useEffect, useState } from "react";
import { Validator } from "../../../utils/validation";

const SecondStep = () => {
  const [disabled, setIsDisabled] = useState(true);
  const [form, setForm] = useState();
  const [error, setError] = useState({});

  const rules = {
    verificationCode: "required|number",
    descriptionUniversity: "required|max:100",
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

  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-md">
            <label htmlFor="inputCountryUni">
              Insert verification code (ministry of education)
            </label>
            <input
              type="number"
              className="form-control"
              id="verificationCode"
              placeholder="Verification Code"
              onChange={handleInputChange}
            />
            <div className="input-alert">{error.verificationCode}</div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="descriptionUniversity">Description</label>
            <input
              type="text"
              className="form-control"
              id="descriptionUniversity"
              placeholder="Description"
              onChange={handleInputChange}
            />
            <div className="input-alert">{error.descriptionUniversity}</div>
          </div>
        </div>
        <div className="next">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="submit"
              className="btn btn-outline-dark "
              href="#carouselExampleControls"
              role="buttonU"
              data-slide="prev"
            >
              Previous
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => alert("confirmed")}
              disabled={disabled}
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SecondStep;

import React from "react";
import { useState, useEffect } from "react";
import { Validator } from "../../../utils/validation";

const SecondStep = () => {
  const [disabled, setIsDisabled] = useState(true);
  const [form, setForm] = useState();
  const [error, setError] = useState({});
  const rules = {
    descriptionFamily: "required|max:1000",
    price: "required|number|max:100",
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
            <label htmlFor="descriptionFamily">Description</label>
            <input
              type="text"
              className="form-control"
              id="descriptionFamily"
              placeholder="Description"
              onChange={handleInputChange}
            />
            <div className="input-alert">{error.descriptionFamily}</div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="price">Staying price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="number"
              onChange={handleInputChange}
            />
            <div className="input-alert">{error.price}</div>
          </div>
        </div>
      </form>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="submit"
          className="btn btn-outline-dark "
          href="#carouselHostFamily"
          role="button"
          data-slide="prev"
        >
          Previous
        </button>
        <button
          className="btn btn-outline-dark"
          disabled={disabled}
          onClick={() => alert("confirmed")}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SecondStep;

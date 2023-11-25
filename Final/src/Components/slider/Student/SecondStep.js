import React, { useEffect, useState } from "react";

const SecondStep = ({cities = [], countries = [ ]}) => {
  const [selectedCountry, setSelectedCountry] = useState("Afghanistan");
  const [majors, setMajors] = useState([]);

  useEffect(() => {
    fetch(
      "https://fivethirtyeight.datasettes.com/fivethirtyeight/college-majors~2Fmajors-list.json?"
    )
      .then((data) => data.json())
      .then((data) =>data.rows)
      .then((data) => data.map((major) => major[2]))
      .then((data)=>data.sort())
      .then(data=>setMajors(data))
  }, []);


  return (
    <div>
      <form>
        <div className="form-row">
            <div className="form-group col-md-6">
            <label htmlFor="inputCountry">Where do you want to study?</label>
              <select
                id="input"
                className="form-control"
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                {countries?.map((country, index) => (
                  <option key={index}>{country}</option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="input">City?</label>
                <select id="inputC" className="form-control">
                  {cities[selectedCountry]?.map((city, index) => (
                    <option key={index}>{city}</option>
                  ))}
                </select>
              </div>
        </div>

        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="submit"
            className="btn btn-outline-dark "
            href="#carouselStudent"
            role="button"
            data-slide="prev"
          >
            Previous
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => alert("confirmed")}
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecondStep;

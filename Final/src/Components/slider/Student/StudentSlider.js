import React, {useEffect, useState} from 'react'
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

const StudentSlider = ({onClick}) => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
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
    return (
        <div
          id="carouselStudent"
          className="carousel slide"
          data-interval="false"
        >
          <h1>Student</h1>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <FirstStep onClick={onClick} countries={countries} cities={cities}/>
            </div>
            <div className="carousel-item">
              <SecondStep countries={countries} cities={cities}/>
            </div>
     
          </div>
        </div>
      );
}

export default StudentSlider
import React from "react";
import CardItem from "../moduls/CardItem";
import "./Cards.css";


function Cards() {
  return (
    <div className="cards">
      <h1>Check Out Some Of Our Features!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://res.cloudinary.com/dlmpygp96/image/upload/v1700742950/pexels-photo-1008155_pmqwna.jpg"
              text="A forum dedicated to you on finding and booking accomodations worldwide."
              label="Your Forum"
              path="/services"
            />
            <CardItem
              src="https://images.pexels.com/photos/4009007/pexels-photo-4009007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              text="Connect with fellow travelers, share experiences, and expand your global network."
              label="Networking"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://res.cloudinary.com/dlmpygp96/image/upload/v1700743528/pexels-photo_imls7v.jpg"
              text="A map showcasing all owned Hotels and suites all over the world!"
              label="Places around the globe"
              path="/services"
            />
            <CardItem
              src="https://res.cloudinary.com/dlmpygp96/image/upload/v1700742122/pexels-photo-5632381_tadqta.jpg"
              text="Discover unbeatable deals and exclusive offers that make your dream getaway reality!"
              label="Special deals and offers"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
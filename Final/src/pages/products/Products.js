import React from "react";
import CardItem from "../../Components/moduls/CardItem";
import "./Products.css";
import Footer from "../../Components/footer/Footer"; 

function Cards() {
  return (
    <>
      <div className="cards">
        <h1>
          Our top Resorts
        </h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem 
                src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                text="Escape to the tranquility of two beaches, three infinity-edge pools, a 42,000-square-foot-spa and sweeping Pacific views at The Ritz-Carlton Bacara, Santa Barbara.       4,200$ per Month"
                label="Beauty By The Bay"
                path="/services"
              />
              <CardItem 
                src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                text="Unparalleled ocean views await in each guest room and suite at The Ritz-Carlton Residences, Waikiki Beach, where youll find the highest infinity pools in Waikiki, creative dining and legendary Ritz-Carlton service. 3,800$ per Month"
                label="Sky-High Hawaiian Splendor"
                path="/services"
              />
            </ul>
            <ul className="cards__items">
              <CardItem 
                src="https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 1x, https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 2x"
                text="Featuring bold design, legendary restaurants and bars, and immersive experiences, The Ritz-Carlton New York, NoMad enlivens the essence of the surrounding neighborhood 3,150$ per month. 3,200$ per month"
                label="The Ritz-Carlton New York, NoMad"
                path="/services"
              />
              <CardItem 
                src="https://images.pexels.com/photos/261156/pexels-photo-261156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                text="
                Open from June 2018 and located in the Shinagawa district of Tokyo, Mitsui Garden Hotel Gotanda is 2.2 km from Ebisu Garden Place and 3.9 km from Roppongi Hills. This 4-star hotel offers free WiFi. 2,500$ per month "
                label="
                Mitsui Garden Hotel Gotanda"
                path="/products"
              />
            </ul>

            <ul className="cards__items">
              <CardItem 
                src="https://lh5.googleusercontent.com/p/AF1QipPvuh00G2Wm4WAZ96cqWxbEg8iH6U0WKHcvK0As=w541-h304-k-no"
                text="Unparalleled luxury and Hollywood glamour in the heart of Beverly Hills, since 1912, California. 1,950$ per month"
                label="The beverly Hills Hotel"
                path="/services"
              />
              <CardItem
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/429097340.jpg?k=3f29fb89dd17cf153d165f3a7c7e02736ddaa28928d278c847c852c7317c364a&o=&hp=1"
                text="Nestled in the vibrant heart of Germany's capital, our esteemed establishment exudes timeless elegance, offering discerning guests an extraordinary blend of sophisticated charm, impeccable service, and a harmonious fusion of modern comforts and classic grandeur. 2,500$ per month"
                label="Hotel Bristol"
                path="/products"
              />
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cards;
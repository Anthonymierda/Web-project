import React from "react";
import CardItem from "../../Components/moduls/CardItem";
import "./Services.css";
import Footer from "../../Components/footer/Footer";

function Cards() {
  return (
    <>
      <div className="cards">
        <h1>
          Global accomodations, exceptional advantages- your travel experience redefined.
        </h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem 
                src="https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=600"
                text="Offering an outdoor swimming pool, a bar and a restaurant, L'Etape Gasconne is located in Allemans-du-Dropt. Free WiFi access is available. 180$ per night"
                label="France, Paris"
                path="/services"
              />
              <CardItem 
                src="https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg?auto=compress&cs=tinysrgb&w=600"
                text=" La Diligence offers a terrace and rooms with a view of the Velays Mountains. 150$ per night"
                label="Usa, California"
                path="/services"
              />
            </ul>
            <ul className="cards__items">
              <CardItem 
                src="https://images.pexels.com/photos/261041/pexels-photo-261041.jpeg?auto=compress&cs=tinysrgb&w=600"
                text="Featuring free use of the indoor pool and sauna facilities, this former 13th-century palace stands in a large park in the peaceful village of Fürstlich Drehna, set in the Spreewald Forest. 135$ per night"
                label="Germany, Fürstlich"
                path="/services"
              />
              <CardItem 
                src="https://images.pexels.com/photos/2659629/pexels-photo-2659629.jpeg?auto=compress&cs=tinysrgb&w=600"
                text=" Featuring accommodation with free WiFi, air conditioning and flat-screen TV, Tyne Valley Country Inn is situated 31 km from Red Shores at Summerside Raceway and 33 km from Harbourfront Theatre. 110$ per night"
                label="Canada, Harbourfront"
                path="/products"
              />
            </ul>

            <ul className="cards__items">
              <CardItem 
                src="https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=600"
                text="The First Collection at Jumeirah Village Circle is located in the district of JVC. The 41-storey features 491 fully equipped guestrooms. 160$ per night"
                label="United Arab Emirates, Dubai"
                path="/services"
              />
              <CardItem 
                src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=600"
                text=" Boastingfree WiFi, The Bell Inn, Rickinghall is set in Rickinghall, 26 km from The Apex and 33 km from Ickworth House. 130$ per night"
                label="England, Rickinghall"
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

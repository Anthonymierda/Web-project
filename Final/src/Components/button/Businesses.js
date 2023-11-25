import React from "react";
import CardItem from "./CardItem";
import "../../Products.css";

function Businesses() {
  return (
    <div className="businesscards">
      <h1>Lebanese Owned Businesses Abroad</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://res.cloudinary.com/dbcw3h2dv/image/upload/v1669374127/images-edubroad/HArvard_utpgxz.jpg"
              text="Harvard University is devoted to excellence in teaching, learning, and research, and to developing leaders who make a difference globally."
              label="Zaatar W Zeit"
              path="/services"
            />
            <CardItem
              src="https://res.cloudinary.com/dbcw3h2dv/image/upload/v1669374028/images-edubroad/Monp_cmddvv.jpg"
              text="The University of Montpellier is a public research university located in Montpellier, in south-east of France. Established in 1220, it is one of the oldest universities in the world"
              label="Bachir"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://res.cloudinary.com/dbcw3h2dv/image/upload/v1669373845/images-edubroad/TTTT_r1ii7k.jpg"
              text="The University of Toronto offers over 700 undergraduate and 200 graduate programs. In all major rankings, the university consistently ranks in the top ten public universities in the world and as the top university in the country"
              label="University of Toronto"
              path="/services"
            />
            <CardItem
              src="https://res.cloudinary.com/dbcw3h2dv/image/upload/v1669373692/images-edubroad/0f4ebb40732da44e7ea25a822f07cc44_qxl7ld.jpg"
              text=" Offer Degree Programs for International Students. English Language Proficiency Required. Come and Join Hundreds of Students from All Over the World In Berlin, Germany. Apply Now. Small Classes. Range of Company Partners. Affordable Study Degrees."
              label="Humboldt University of Berlin"
              path="/products"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="https://res.cloudinary.com/dbcw3h2dv/image/upload/v1669374985/images-edubroad/UAE_gfrhem.avif"
              text="United Arab Emirates University is a public research university located in Al Ain, United Arab Emirates. It is the oldest university in the United Arab Emirates"
              label="United Arab Emirates University"
              path="/services"
            />
            <CardItem
              src="https://res.cloudinary.com/dbcw3h2dv/image/upload/v1669374810/images-edubroad/University_of_Pretoria_quml0p.jpg"
              text=" The University of Pretoria is a multi-campus public research university in Pretoria, the administrative and de facto capital of South Africa"
              label="University of Pretoria"
              path="/products"
            />
          </ul>
          
        </div>
      </div>
      </div>
  );
}

export default Businesses;
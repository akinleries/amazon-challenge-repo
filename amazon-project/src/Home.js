import React from "react";
import "./Home.css";
import Product from "./Product";
import Chair from "./images/amazon_chair.jpg";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home-container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="Epic Daily Deals"
          />

          <div className="home__row">
            <Product
              id={12321341}
              title="seat comfortably"
              price={11.0}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              //key={123}
            />
            <Product
              id={49538094}
              title="seat comfortably"
              price={294.0}
              rating={4}
              image={Chair}
              //  key={1234}
            />
          </div>

          <div className="home__row">
            <Product
              id={4903850}
              title="seat comfortably"
              price={199.02}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swgge7XAL._AC_SX466_.jpg"
              //  key={123456}
            />
            <Product
              id={1234567}
              title="seat comfortably"
              price={12.02}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
              // key={1234567}
            />
            <Product
              id={49033461}
              title="seat comfortably"
              price={199.02}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/B16ctt5WV5L._AC_SX385_.jpg"
              //  key={123456}
            />
          </div>

          <div className="home__row">
            <Product
              id={12348052}
              title="seat comfortably"
              price={294.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
              // key={1234}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

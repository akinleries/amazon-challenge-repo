import React from 'react'
import './Home.css'
import Product from './Product'
//import City from './images/city.jpg'


const Home = () => {
  return (
    <div className = "home">
        <div className="home-container">
{/* 
         <img className = "home__image" size ={150} src={City} alt="" /> */}
         <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/Holiday/EpicDailyDeals/LandingPage/HOL21_EDD_Phase4_hero-banner_short_desktop_1500x150.jpg" alt="Epic Daily Deals"/>

      <div className="home__row">
            <Product/>
            <Product/>
      </div>

      <div className="home__row">
            <Product/>
            <Product/>
            <Product/>
      </div>

    <div className="home__row">
           <Product/>
    </div>
          

    </div>  
    </div>
  )
}

export default Home
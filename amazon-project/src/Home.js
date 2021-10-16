import React from 'react'
import './Home.css'
import Product from './Product'
import AdertImage from './images/market_image.jpg'
import Chair from './images/amazon_chair.jpg'
//import City from './images/city.jpg'


const Home = () => {
  return (
   <div>
      <div className = "first__text">
        <marquee behavior = "scroll" direction = "left" width = "100%">Welcome to amazon Online Shopping</marquee>
      </div>
    <div className = "home">
  
        <div className="home-container">

{/* 
         <img className = "home__image" size ={150} src={City} alt="" /> */}
         {/* <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/Holiday/EpicDailyDeals/LandingPage/HOL21_EDD_Phase4_hero-banner_short_desktop_1500x150.jpg" alt="Epic Daily Deals"/> */}
          <img className = "home__image" src={AdertImage} alt="" />
      <div className="home__row">
        
            <Product 
            title = "seat comfortably"
            price = {12.02}
            rating = {5}
            image = {Chair}
            />
            <Product
             title = "seat comfortably"
             price = {12.02}
             rating = {5}
             image = {Chair}
            />

           <Product
             title = "seat comfortably"
             price = {12.02}
             rating = {5}
             image = {Chair}
            />
      </div>

      <div className="home__row">
            <Product
             title = "seat comfortably"
             price = {12.02}
             rating = {5}
             image = {Chair}
            />
            <Product
             title = "seat comfortably"
             price = {12.02}
             rating = {5}
             image = {Chair}
            />
            <Product
             title = "seat comfortably"
             price = {12.02}
             rating = {5}
             image = {Chair}
            />
      </div>

    <div className="home__row">
           <Product
            title = "seat comfortably"
            price = {12.02}
            rating = {5}
            image = {Chair}
           />
    </div>
          

    </div>  
    </div>
   </div>
  )
}

export default Home
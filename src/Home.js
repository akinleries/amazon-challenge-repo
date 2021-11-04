import React from 'react'
import './Home.css'
import Product from './Product'
import Chair from './images/amazon_chair.jpg'
 


const Home = () => {
  return (
   <div>
      
    <div className = "home">
  
        <div className="home-container">


          <img className = "home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Epic Daily Deals"/> 
        
      <div className="home__row">
        
            <Product 
            
            id = {123}
            title = "seat comfortably"
            price = {12.02}
            rating = {5}
            image = {Chair}
            key = {123}
            />
            <Product
            id = {1234}
             title = "seat comfortably"
             price = {12.02}
             rating = {5}
             image = {Chair}
             key = {1234}
            />

           <Product
             id = {12345}
             title = "seat comfortably"
             price = {12.02}
             rating = {5}
             image = {Chair}
             key = {12345}
            />
      </div>

      <div className="home__row">
            <Product
            id = {123456}
             title = "seat comfortably"
             price = {12.02}
             rating = {5}
             image = {Chair}
             key = {123456}
            />
            <Product
            id = {1234567}
             title = "seat comfortably"
             price = {12.02}
             rating = {5}
             image = {Chair}
             key = {1234567}
            />
            <Product
            id = {12345678}
             title = "seat comfortably"
             price = {12.02}
             rating = {5}
             image = {Chair}
             key = {12345678}
            />
      </div>

    <div className="home__row">
           <Product

             id = {123456780}
            title = "seat comfortably"
            price = {12.02}
            rating = {5}
            image = {Chair}
            key = {123456780}
           />
    </div>
          

    </div>  
    </div>
   </div>
  )
}

export default Home
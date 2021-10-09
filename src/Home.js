import React from 'react'
import './Home.css'
import Product from './Product'
import City from './images/city.jpg'


const Home = () => {
  return (
    <div className = "home">
        <div className="home-container">

         <img className = "home__image" src={City} alt="" />

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
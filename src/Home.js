import React from 'react'
import './Home.css'
import Product from './Product'


const Home = () => {
  return (
    <div className = "home">
        <div className="home-container">
          <Product/>
          <Product/>
          <Product/>

            <img src="https://image-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/
            Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42868422_.jpg" alt="" />

        </div>

       
      
    </div>
  )
}

export default Home
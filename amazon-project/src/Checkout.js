import React from 'react'
import Subtotal from './Subtotal'
import './Checkout.css'

const Checkout = () => {
    return (
        <div className = "checkout">
            <div className="checkout__left">
                <img className = "checkout__ads" 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ads_image" />

            <div className="checkout__title">
                <h1>your shopping basket</h1>
            </div>
            </div>

           

            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
 
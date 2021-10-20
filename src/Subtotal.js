import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
 

const Subtotal = () => {
    return (
        <div className = "subtotal">
             <CurrencyFormat 
             renderText = {(value) => (
               <div>
                     <p> Subtotal (0 items) : <strong>0</strong></p>
                 <small className = "subtotal__gift"><input type="checkbox" />This order contains gift </small>
               </div>
             )}
             decimalScale = {2}
             value = {0}
             displayType = {"text"}
             thousandSeparator = {true}
             prefix = {"$"}
             />
             <div className="checkout__button">proceed to checkout</div>
        </div>
    )
}

export default Subtotal

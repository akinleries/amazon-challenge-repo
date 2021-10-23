import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
 

const Subtotal = () => {

  const [{basket}, dispatch] = useStateValue();
    return (
        <div className = "subtotal">
             <CurrencyFormat 
             renderText = {(value) => (
               <div>
                     <p> Subtotal ({basket.length} items) : <strong>{basket?.reduce((amount, item) => item.price + amount, 0 )}</strong></p>
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

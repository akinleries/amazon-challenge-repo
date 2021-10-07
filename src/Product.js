import React from 'react'
import './Product.css'

const Product = () => {
  return (
    <div className= "product">
      <div className="product__info">
        <p>Lorem ipsum dolor sit amet consectetur adipis</p>
        <div className="product__price">
          <p>
            <small>$</small>
            <strong>18.00</strong>
          </p>
        </div>

      <div className="product__rating">
        
      </div>  
      </div>
      <img src="" alt="" />
    <button>add to cart</button>  
    </div>
  )
}

export default  Product
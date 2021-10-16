import React from 'react'
import './Product.css'

const Product = ({title, price, rating, image}) => {
  return (
    <div className= "product">
      <div className="product__info">
        <p>{title}</p>
        <div className="product__price">
          <p>
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>

      <div className="product__rating">{
        Array(rating).fill().map(( _, i) => (
          <p>*</p>
        ))
      }</div>  
      </div>
      <img className = "product__image" src={image} alt="" /> 
      <div className="add_to_cart_button">add to cart</div> 
    </div>
  )
}

export default  Product
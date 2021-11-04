import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

const Product = ({id, title, price, rating, image}) => {

  const [{basket}, dispatch] = useStateValue();
  console.log("this is the basket  >>", basket)

  const addToCart = () =>{

    dispatch({
      type : "ADD_TO_CART",
      item : {
        id : id,
        title : title,
        price : price,
        rating : rating,
        image : image
      },
    });
      
  };
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
      <div className="add_to_cart_button" onClick = {addToCart} >add to cart</div> 
    </div>
  )
}

export default  Product
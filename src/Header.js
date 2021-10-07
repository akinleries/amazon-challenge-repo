import React from 'react'
import './Header.css'
//import Logo from './images/amazon-logo3.png'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
 

const Header = () => {
  return (
    <div className = "header">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" className="header-logo" />
        {/* <img src={Logo} alt="amazon-logo" className="header-logo" /> */}

       <div className="header__search">
            <input type="text" className="header-searchInput" />
            <SearchIcon className= "header__searchIcon"/>
            </div>

        <div className="header-nav">
          <div className="header-option">
            <span className ="header-optionOne">Hello guest  </span>
            <span className ="header-optionTwo">sign in  </span> 
          </div>

          <div className="header-option">
            <span className ="header-optionOne">return </span>
            <span className ="header-optionTwo"> & order   </span>
          </div>

          <div className="header-option">
            <span className ="header-optionOne"> your </span>
            <span className ="header-optionTwo"> prime </span>
        </div>

        <div className="header-shoppingBasket">
          <ShoppingCart/>
          <span className ="header_optionTwo header_basketCount">0</span>
        </div>

        
        
       </div>
    </div>
  )
}

export default Header

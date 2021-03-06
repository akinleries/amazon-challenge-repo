import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionOne">Hello guest </span>
          <span className="header-optionTwo">sign in </span>
        </div>

        <div className="header-option">
          <span className="header-optionOne">return </span>
          <span className="header-optionTwo"> & order </span>
        </div>

        <div className="header-option">
          <span className="header-optionOne"> your </span>
          <span className="header-optionTwo"> prime </span>
        </div>

        <Link to="/checkout">
          <div className="header-shoppingBasket">
            <ShoppingCart />
            <span className="header_optionTwo   header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

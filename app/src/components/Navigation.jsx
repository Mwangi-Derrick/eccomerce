import React, { useEffect, useState, useRef } from 'react';
import ArrowDown from "@mui/icons-material/KeyboardArrowDown";
import ArrowUp from "@mui/icons-material/KeyboardArrowUp";
import Box from '@mui/icons-material/Inventory2Outlined';
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useStateValue } from "../data/StateProvider";
import "../styles/Navigation.css";

function Navigation() {
  let [{ basket }] = useStateValue();
  
  const [basketQuantity, setQuantiity] = useState(0);
  const [arrowUp, setArrowUp] = useState(false);
  
  const accountRef = useRef(null);
  const accDropDown = useRef(null);
  useEffect(() => {
    const acc = basket?.reduce((total, item) => {
      return (total += item.quantity);
    }, 0);
    setQuantiity(acc);
  }, [basket,basketQuantity]);
  console.log(basket);

  const handleAccountMenu = (e) => {
    if (accountRef.current && accountRef.current.contains(e.target) ) {
      setArrowUp((prev) => !prev);
    }
    else if (accDropDown.current.contains(e.target)) { setArrowUp(true); }
    else {
      setArrowUp(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleAccountMenu);
    return () => {
      document.removeEventListener('click', handleAccountMenu);
    };
  }, []);

  return (
    <div className="navigation">
      <div className="login-label">
        <div className="account" ref={accountRef}>
          <AccountCircleIcon />
          <span className="icon-description">
            Account
            {arrowUp === false ? <ArrowDown /> : <ArrowUp />}
          </span>
        </div>
        <div className={arrowUp === true ? "account-drop-down" : "none"} ref={accDropDown}> 
          <Link to="/Login" className="sign-in">
            <button>SIGN IN</button>
          </Link>
          <p>
            <AccountCircleIcon />My Account
          </p>
          <p>
            <Box /> Orders
          </p>
        </div>
      </div>
      <div className="help">
        <HelpOutlineIcon />
        <span className="icon-description">Help</span>
      </div>
      <Link
        className="cart-link"
        to="/cart"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <ShoppingCartIcon className="cart-icon" />
        <div className="quantity-container">
          <span
            className="quantity"
            style={{ opacity: basket?.length === 0 ? "0" : "1" }}
          >
            {basketQuantity}
          </span>
        </div>
        <span className="icon-description">Cart</span>
      </Link>
    </div>
  );
}

export default Navigation;

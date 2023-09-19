import React, { useState } from "react";
import logo from "../assets/Jumia-Logo.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/Navbar.css";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Navbar() {
  const [input, setInputValue] = useState("");
  const showOrHideCloseIcon = (e) => {
    let inputValue = e.target.value;
    setInputValue(inputValue);
  };
  const clearInput = () => {
    setInputValue("");
  };

  const closeIcon = input !== '';
  return (
    <div className="navbar">
      <div className="logo_container">
        <MenuIcon className="menu-icon" />
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img className="jumia_logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="search_component">
        <div className="search_box">
          <SearchIcon className="search-icon" />
          <input
            value={input}
            onInput={showOrHideCloseIcon}
            type="text"
            placeholder="Search products, brands and categories"
            className="search_bar"
          />{closeIcon &&(
            <CloseIcon
              onClick={clearInput}
              className="close-icon"
            />)}
        </div>
        <button className="search-btn">SEARCH</button>
      </div>
      <Navigation/>
    </div>
  );
}
export default Navbar;

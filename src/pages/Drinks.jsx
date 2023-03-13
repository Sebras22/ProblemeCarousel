import React from "react";
import { Link } from "react-router-dom";
import MenuDrinks from "../components/MenuDrinks";
import "./drinks.scss";

const Drinks = () => {
  return (
    <div>
      <div className="topMenu">
        <button className="back">
        <Link to="/">
          <img src="./src/assets/back.svg" alt="" />
          </Link>
        </button>
        <button className="kart">
        <Link to="/Cart">

          <img src="./src/assets/kart.svg" alt="" />
          </Link>
        </button>
      </div>
      <div>
        <MenuDrinks/>
      </div>
    </div>
  );
};

export default Drinks;

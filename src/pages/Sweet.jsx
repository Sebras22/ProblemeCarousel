import React from "react";
import { Link } from "react-router-dom";
import MenuSweet from "../components/MenuSweet";
import "./sweet.scss";

const Sweet = () => {
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
        <MenuSweet />
      </div>
    </div>
  );
};

export default Sweet;

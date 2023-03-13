import React from "react";
import { Link } from "react-router-dom";
import Salads from "../components/Salads";
import "./menusalads.scss";

const MenuSalads = () => {
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
      <h1>Salads</h1>
      <div className="CardSalade">
        <img src="./src/assets/salade2.svg" alt="" />
      </div>
      <div className="text">
        <p className="price">£ 7,50</p>
        <p>House Leaf Mix Salad with : </p>
      </div>
      <Salads />
    </div>
  );
};

export default MenuSalads;

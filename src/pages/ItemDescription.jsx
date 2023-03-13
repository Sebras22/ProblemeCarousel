import React, { useState } from "react";
import "./itemdescription.scss";
import CardItem from "../components/CardItem";
import { Link } from "react-router-dom";

const ItemDescription = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="Page">
        <div className="topMenu">
          <button className="back">
            <Link to={"/Menu"}>
              <img src="./src/assets/back.svg" alt="" />
            </Link>
          </button>
          <button className="kart">
            <Link to="/Cart">
              <img src="./src/assets/kart.svg" alt="" />
            </Link>
          </button>
        </div>
        <div className="Item">
          <div className="dot"></div>
          <img className="cheese" src="/src/assets/fromage.svg" alt="" />
        </div>
      </div>
      <div className="BasPage">
        <button className="note">
          <img className="star" src="./src/assets/Star.svg" alt="" />
          &ensp;
          <p> 4.5</p>
        </button>
        <div className="cheese2">
          <h3>Cheddars</h3>
          <div className="count">
            <div onClick={() => setCount(count - 1)}>
              <img src="./src/assets/moins.svg" alt="" />
            </div>
            &ensp;
            <p>{count}</p>
            &ensp;
            <div onClick={() => setCount(count + 1)}>
              <img src="./src/assets/plus.svg" alt="" />
            </div>
          </div>
        </div>
        <p className="Desc">
          Lörem ipsum nikende sytijaskapet i kroren vuligen tinat. Neda
          pneumafiering bes. Spes vydehet. Berat on, iling, i terabel bejörade.
          Seheten således.{" "}
        </p>
        <h4>Adds on</h4>
        <CardItem />
        <div className="btncart">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;

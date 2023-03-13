import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cartpage.scss";

const CartPage = () => {
  const [count, setCount] = useState(0);
  const [coun, setCoun] = useState(0);
  return (
    <div>
      <button className="back">
        <Link to="/">
          <img src="./src/assets/back.svg" alt="" />
        </Link>
      </button>
      <div className="Item">
        <div className="cardcart">
          <img src="./src/assets/fromage.svg" alt="" />
        </div>
        <div className="center">
          <p className="Name">Cheddars</p>
          <p className="Price">£ 2,00</p>
          <div className="compteur">
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
        <img className="delete" src="./src/assets/delete.svg" alt="" />
      </div>
      <div className="Item">
        <div className="cardcart">
          <img src="./src/assets/burgerpesto.svg" alt="" />
        </div>
        <div className="center">
          <p className="Name">Cheddars</p>
          <p className="Price">£ 8,95</p>
          <div className="compteur">
            <div onClick={() => setCoun(coun - 1)}>
              <img src="./src/assets/moins.svg" alt="" />
            </div>
            &ensp;
            <p>{coun}</p>
            &ensp;
            <div onClick={() => setCoun(coun + 1)}>
              <img src="./src/assets/plus.svg" alt="" />
            </div>
          </div>
        </div>
        <img className="delete" src="./src/assets/delete.svg" alt="" />
      </div>
      <div className="order">
        <h3>Order Instructions</h3>
        <input type="text" placeholder="Tape here..." />
      </div>
      <div className="total">
        <h3>Total:</h3>
        <p>£ 8,95</p>
      </div>
      <div className="boutons">
        <button className="checkout">Checkout</button>
        <Link to={"/Menu"}>
          <button className="back">Back to Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;

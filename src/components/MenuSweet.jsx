import React from "react";
import { svgsweet } from "../scripts/globalVariables";
import "./menusweet.scss";

const MenuSweet = () => {

  return (
    <div className="SnackBar">
      <div className="Snack">
        <h1>SWEET</h1>
        <p className="info">Lörem ipsum nikende sytijaskapet i kroren vuligen tinat. Neda pneumafiering bes Lörem ipsum nikende sytijaskapet i kroren vuligen tinat. Neda pneumafiering bes</p>
        <div className="cardsnack_body">
          {svgsweet.map((el, i) => {
            return (
              <div className="cardsnack" key={el.id}>
                <div
                  className={
                    (i >= 6 ? i % 2 == 0 : i % 2 == 1)
                      ? "background odd"
                      : "background even"
                  }
                >
                  <img src={el.src} alt={el.name} />
                </div>
                <div className="plus">
                  <button
                    className={
                      (!(i >= 6) ? i % 2 == 0 : i % 2 == 1) ? " odd" : " even"
                    }
                  >
                    +
                  </button>
                </div>
                <div className="snacktext">
                  <p>{el.name}</p>
                  <p className="textsnack">£ {el.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuSweet;

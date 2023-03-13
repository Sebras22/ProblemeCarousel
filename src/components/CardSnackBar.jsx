import React from "react";
import "./cardsnackbar.scss";
import { svgsnackbar } from "../scripts/globalVariables";

const CardSnackBar = () => {
  return (
    <div className="SnackBar">
      <div className="Snack">
        <h1>SNACK BAR</h1>
        <div className="cardsnack_body">
          {svgsnackbar.map((el, i) => {
            return (
              <div className="cardsnack" key={el.id}>
                <div className={(i >= 6 ? i % 2 == 0 : i % 2 == 1)
                    ? "background odd"
                    : "background even"}>
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

export default CardSnackBar;

import React from "react";
import "./sandwichs.scss";
import { svgsandwichs } from "../scripts/globalVariables";

const Sandwichs = () => {
  return (
    <div className="SnackBar">
      <div className="Snack">
        <h1>SANDWICH</h1>
        <div className="cardsnack_body">
          {svgsandwichs.map((el, i) => {
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

export default Sandwichs;

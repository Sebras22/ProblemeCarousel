import React from "react";
import "./salads.scss";
import { svgsalads } from "../scripts/globalVariables";

const Salads = () => {
  return (
    <div className="SnackBar">
      <div className="Snack">
        <div className="cardsnack_body">
          {svgsalads.map((el, i) => {
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Salads;

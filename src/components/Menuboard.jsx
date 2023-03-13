import React from "react";
import "./menuboard.scss";
import { svgboard } from "../scripts/globalVariables";

const Menuboard = () => {
  return (
    <div className="Board">
      <div className="Snack">
        <h1>BOARD</h1>
        <div className="cardboard_body">
          {svgboard.map((el, i) => {
            return (
              <div className="agencement" key={el.id}>
                <div className="cardsnack">
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
                <div className="desc">
                  Lörem ipsum nikende sytijaskapet i kroren vuligen tinat. Neda
                  pneumafiering bes
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menuboard;

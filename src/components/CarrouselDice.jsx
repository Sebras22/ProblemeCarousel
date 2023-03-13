import React from "react";
import "./carrouseldice.scss";
import { svgdice } from "../scripts/globalVariables";

const CarrouselDice = () => {
  return (
    <div className="allcard">
      {svgdice.map((el, i) => {
        return (
          <div className="anothercard" key={el.i}>
            <div className="carddice">
              <div className="align">
                <h3 className="centre" >{el.text}</h3>
                <button className="centre">{el.name}</button>
              </div>
              <img src={el.src} alt={i} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarrouselDice;

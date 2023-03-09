import React from "react";
import "./carrouseldice.scss";
import { svgdice } from "../scripts/globalVariables";

const CarrouselDice = () => {
  return (
    <div className="allcard">
      {svgdice.map((svgdice, i) => {
        return (
          <div className="anothercard" key={i}>
            <div className="carddice">
              <div className="align">
                <h3 className="centre">{svgdice.text}</h3>
                <button className="centre">{svgdice.name}</button>
              </div>
              <img src={svgdice.src} alt={i} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarrouselDice;

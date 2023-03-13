import React, { useState, useEffect } from "react";
import { images2 } from "../scripts/globalVariables";
import "./carrousel.scss";

const Carrousel = () => {

  return (
    <div className="carousel">
      {images2.map((el, i) => {
            return (
              <div key={i}>
                <img src={el} alt={i} />
              </div>
            );
          })}
    </div>
  );
};

export default Carrousel;

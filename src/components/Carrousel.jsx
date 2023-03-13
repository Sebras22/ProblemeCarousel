import React, { useState, useEffect } from "react";
import { images } from "../scripts/globalVariables";
import "./carrousel.scss";

const Carrousel = () => {

  return (
    <div className="carousel">
      {images.map((images, i) => {
            return (
              <div className="image" key={i}>
                <img src={images} alt={i} />

                <h2 className="textover">Welcome to the Dice</h2>
                <h3 className="textover">A new way to socialize in Portsmouth + Worthing</h3>
              </div>
            );
          })}
    </div>
  );
};

export default Carrousel;

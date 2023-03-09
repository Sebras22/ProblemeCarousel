import React, { useState, useEffect } from "react";
import { images } from "../scripts/globalVariables";
import "./carrousel.scss";

const Carrousel = () => {

  return (
    <div className="carousel">
      {images.map((images, i) => {
            return (
              <div key={i}>
                <img src={images} alt={i} />
              </div>
            );
          })}
    </div>
  );
};

export default Carrousel;

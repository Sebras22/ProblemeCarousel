import React from "react";
import { svgpopular } from "../scripts/globalVariables";
import "./cardpopular.scss";

const CardPopular = () => {
  
  return (
    <div className="background">
      {svgpopular.map((el, i) => {
            return (
              <div className={(i>=4 ? i%2==1 : i%2==0) ? "cardpopular odd": "cardpopular even" } key={el.id}>
                <img src={el.src} alt={el.name} />
                <div>
                <p className="titrepopular">{el.name}</p>
                <p>{el.price}</p>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default CardPopular;

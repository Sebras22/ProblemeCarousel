import React from "react";
import "./carditem.scss";
import { svgitem } from "../scripts/globalVariables";

const CardItem = () => {
  return (
    <div className="adds">
      {svgitem.map((el, i) => {
        return (
          <div className="carditem" key={el.id}>
            <img className="products" src={el.src} alt={el.name} />
            <div className="plus">
              <img
                className={
                  (!(i >= 6) ? i % 2 == 0 : i % 2 == 1) ? " odd" : " even"
                } src="./src/assets/plus_button.svg"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardItem;

import React from "react";
import { imagescard } from "../scripts/globalVariables";
import "./cardmenu.scss";

function Card() {
 
  return (
    <div className="All">
      <div>
        <div className="card__body">
          {imagescard.map((el, i) => {
            return (
              <div className={(i>=6 ? i%2==0 : i%2==1) ? "cardmenu odd": "cardmenu even" } key={el.id}>
                <img src={el.src} alt={el.name} />
                <div className="menutext">
                <p>{el.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Card;

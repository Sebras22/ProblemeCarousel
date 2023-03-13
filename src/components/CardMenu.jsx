import React from "react";
import { Link, NavLink } from "react-router-dom";
import { imagescard } from "../scripts/globalVariables";
import "./cardmenu.scss";

function Card() {
 
  return (
    <div className="All">
      <div>
        <div className="card__body">
          {imagescard.map((el, i) => {
            return (
              <div onClick={'/Menu'} className={(i>=6 ? i%2==0 : i%2==1) ? "cardmenu odd": "cardmenu even" } key={el.id}>
                <Link to={el.link}>
                  
                <img src={el.src} alt={el.name} />
                </Link>
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

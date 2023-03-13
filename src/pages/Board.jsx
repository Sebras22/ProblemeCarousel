import React from "react";
import { Link } from "react-router-dom";
import Menuboard from "../components/Menuboard";
import "./board.scss";

const Board = () => {
  return (
    <div>
      <div className="topMenu">
        <button className="back">
          <Link to="/">
          <img src="./src/assets/back.svg" alt="" />
          </Link>
        </button>
        <button className="kart">
          <Link to="/Cart">

          <img src="./src/assets/kart.svg" alt="" />
          </Link>
        </button>
      </div>
      <div>
        <Menuboard />
      </div>
    </div>
  );
};

export default Board;

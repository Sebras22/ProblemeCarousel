import React from "react";
import "./menu.scss";
import CardSnackBar from "../components/CardSnackBar";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="Menu">
      <div className="topMenu">
        <Link to="/">
          <button>
            <img src="./src/assets/back.svg" alt="" />
          </button>
        </Link>
        <button>
          {" "}
          <Link to="/Cart">
            <img src="./src/assets/kart.svg" alt="" />
          </Link>
        </button>
      </div>
      <CardSnackBar />
    </div>
  );
};

export default Menu;

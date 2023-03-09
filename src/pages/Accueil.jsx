import React from "react";
import Carrousel from "../components/Carrousel.jsx";
import CardMenu from "../components/CardMenu.jsx";
import CardSeasonal from "../components/CardSeasonal.jsx";
import CardPopular from "../components/CardPopular.jsx";
import CarrouselDice from "../components/CarrouselDice.jsx";
import "./Accueil.scss";
import Slider from "../assets/sliders-h.svg";
import Search from "../assets/search.svg";

const Accueil = () => {
  return (
    <div>
      <div className="top"></div>
      <div className="Searchbar">
        <button className="boutong">
          <img className="loupe" src={Search} alt="" />
        </button>
        <input type="text" placeholder="Search" name="" id="" />
        <button className="boutond">
          <img src={Slider} alt="" />
        </button>
      </div>
      <div className="truc">
        <Carrousel />
      </div>
      <div>
        <h2>The Dice</h2>
        <CarrouselDice />
      </div>
      <div>
        <h2>Come and enjoy the Dice</h2>
        <Carrousel />
      </div>
      <div>
        <h1 className="Titrebas">Menu</h1>
        <CardMenu />
      </div>
      <div>
        <h2 className="Titrebas2">Seasonal Specials</h2>
        <CardSeasonal />
      </div>
      <div>
        <h2 className="Titrebas">Popular</h2>
        <CardPopular />
      </div>
    </div>
  );
};

export default Accueil;

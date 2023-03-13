import { useState } from "react";
import Carrousel from "./components/Carrousel.jsx";
import CardMenu from "./components/CardMenu.jsx";
import CardSeasonal from "./components/CardSeasonal.jsx";
import Filter from "./components/Filter.jsx";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CardPopular from "./components/CardPopular.jsx";

import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Menu from "./pages/Menu.jsx";
import ItemDescription from "./pages/ItemDescription.jsx";
import MenuSalads from "./pages/MenuSalads.jsx";
import MenuSandwich from "./pages/MenuSandwich.jsx";
import Board from "./pages/Board.jsx";
import Drinks from "./pages/Drinks.jsx";
import Sweet from "./pages/Sweet.jsx";
import CartPage from "./pages/CartPage.jsx";


function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="Menu" element={<Menu />}></Route>
        <Route path="Description" element={<ItemDescription/>}/>
        <Route path="Salads" element={<MenuSalads/>}/>
        <Route path="Sandwichs" element={<MenuSandwich/>}/>
        <Route path="Board" element={<Board/>}/>
        <Route path="Drinks" element={<Drinks/>}/>
        <Route path="Sweet" element={<Sweet/>}/>
        <Route path="Cart" element={<CartPage/>}/>
      </Routes>
    </>
  );
}

export default App;

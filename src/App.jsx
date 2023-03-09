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

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Accueil />} />
    </Routes>
    </>

  );
}

export default App;

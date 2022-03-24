import "./App.css";
import "./";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import { useEstate } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Keyframes } from "react-keyframes";
// import { Document, Page } from "react-pdf"; llibreia per importar pdf
import llista from "./pages/LLista";
import Layout from "./Layout";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Comptador from "./pages/Comptador";
import ToggleButton from "./pages/ToggleButton";
import Acordio from "./pages/Acordio";
import RellotgeDigital from "./pages/RellotgeDigital";
import ReactPlayer from "react-player";
import Activitat from "./pages/Activitat"; //aquesta página es importació del pdf prova

import Vector from "./pages/Vector";
import CounterRedux from "./pages/CounterRedux";
import Carrusel from "./pages/Carrusel";
import TicTacToe from "./pages/TicTacToe";
import samplePDF from "./documents/sample.pdf";

// import BarraSlider from "./pages/BarraSlider";

// import Flocs from "./pages/Flocs";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Galeria" element={<Galeria />} />
          {/* <Route path="Vector" element={<Vector />} /> */}
          <Route path="Comptador" element={<Comptador />} />
          <Route path="ToggleButton" element={<ToggleButton />} />
          <Route path="Acordio" element={<Acordio />} />
          <Route path="TicTacToe" element={<TicTacToe />} />
          <Route path="RellotgeDigital" element={<RellotgeDigital />} />
          {/* <Route path="Carrusel" element={<Carrusel />} />
          <Route path="BarraSlider" element={<BarraSlider />} /> */}
          <Route path="Activitat" element={<Activitat pdf={samplePDF} />} />
          {/* <Route path="CounterRedux" element={<CounterRedux />} />
        
      
 
          
         

          {llista.map((item) => (
            <Route path={item.path} element={item.element} />
          ))} */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

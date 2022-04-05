import "./App.css";

import CounterRedux from "./pages/CounterRedux";
// import { HashRouter, Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import { useEstate } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./pages/ComptadorRedux/store";
import { Provider } from "react-redux";
// import { Keyframes } from "react-keyframes";
// import { Document, Page } from "react-pdf"; llibreia per importar pdf
import llista from "./pages/LLista";
import Layout from "./Layout";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Comptador from "./pages/Comptador";
import ToggleButton from "./pages/ToggleButton";
import Acordeon from "./pages/Acordeon";
import RellotgeDigital from "./pages/RellotgeDigital";
import RellotgeAnalogic from "./pages/RellotgeAnalogic";
import ReactPlayer from "react-player";
import Activitat from "./pages/Activitat"; //aquesta página es importació del pdf prova
import Vector from "./pages/Vector";

import Carrusel from "./pages/Carrusel";
import TicTacToe from "./pages/TicTacToe";
import samplePDF from "./documents/sample.pdf";
import Neva from "./pages/Neva";
import RelojAnalogico from "./pages/RelojAnalogico";
import SumadorNumeros from "./pages/SumadorNumeros";

// import BarraSlider from "./pages/BarraSlider";

// import Flocs from "./pages/Flocs";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Galeria" element={<Galeria />} />
            <Route path="Comptador" element={<Comptador />} />
            <Route path="ToggleButton" element={<ToggleButton />} />
            <Route path="Acordeon" element={<Acordeon />} />
            <Route path="Vector" element={<Vector />} />
            <Route path="CounterRedux" element={<CounterRedux />} />
            <Route path="SumadorNumeros" element={<SumadorNumeros />} />
            {/* <Route path="Calculadora" element={<Calculadora />} /> */}
            <Route path="Carrusel" element={<Carrusel />} />
            <Route path="RelojAnalogico" element={<RelojAnalogico />} />
            <Route path="RellotgeDigital" element={<RellotgeDigital />} />
            {/* <Route path="NevaPerNadal" element={<NevaPerNadal />} /> */}
            {/* <Route path="ExercicisArrays" element={<ExercicisArrays />} /> */}
            <Route path="Apunts" element={<RellotgeDigital />} />
            <Route path="Neva" element={<Neva />} />
            <Route path="TicTacToe" element={<TicTacToe />} />
            {/* <Route path="Carrusel" element={<Carrusel />} />
          
          
          <Route path="Activitat" element={<Activitat pdf={samplePDF} />} />
          {/* <Route path="CounterRedux" element={<CounterRedux />} />
        
      
 
          
         

          {llista.map((item) => (
            <Route path={item.path} element={item.element} />
          ))} */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

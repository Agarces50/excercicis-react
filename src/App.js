import "./App.css";
import "./";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import { useEstate } from "react";
import { useSelector, useDispatch } from "react-redux";
import llista from "./pages/LLista";
import Layout from "./Layout";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Comptador from "./pages/Comptador";
import ToggleButton from "./pages/ToggleButton";
import Acordio from "./pages/Acordio";
import Vector from "./pages/Vector";
import CounterRedux from "./pages/CounterRedux";
// import Flocs from "./pages/Flocs";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Galeria" element={<Galeria />} />
          <Route path="Vector" element={<Vector />} />
          <Route path="Comptador" element={<Comptador />} />
          <Route path="ToggleButton" element={<ToggleButton />} />
          <Route path="Acordio" element={<Acordio />} />
          {/* <Route path="CounterRedux" element={<CounterRedux />} />

          {/* <Route path="Comptador" element={<Comptador />} />
          <Route path="ToggleButton" element={<ToogleButton />} />
          <Route path="Acordio" element={<Acordio />} /> */}
          {/* <Route path="Galeria" element={<Galeria/>}

          {llista.map((item) => (
            <Route path={item.path} element={item.element} />
          ))} */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
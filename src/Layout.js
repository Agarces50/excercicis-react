import { Outlet, Link } from "react-router-dom";
import llista from "./pages/LLista";
import Galeria from "./pages/Galeria";
import Comptador from "./pages/Comptador";
import ToggleButton from "./pages/ToggleButton";
import Home from "./pages/Home";
import Acordio from "./pages/Acordio";
import CounterRedux from "./pages/CounterRedux";

export default function Layout() {
  return (
    <>
      <header>
        <h1>EJERCICIOS DE REACT</h1>
      </header>

      <div class="HolyGrail-body">
        <main class="HolyGrail-content">
          <Outlet />
          <img src="imagenes/97985499.png" alt="imagenes/calimero.png" />
        </main>
        <nav class="HolyGrail-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="Galeria">Galeria</Link>
            </li>

            <li>
              <Link to="Comptador">Comptador</Link>
            </li>

            <li>
              <Link to="ToggleButton">ToggleButton</Link>
            </li>
            <li>
              <Link to="Acordio">Acordio</Link>
            </li>

            <li>
              <Link to="CounterRedux">CounterRedux</Link>
            </li>
          </ul>
        </nav>
        <aside class="HolyGrail-ads">
          …<a href="#">link hacia ejercicios react</a>
          <br />…<a href="#">cv</a>…
          <br />
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            rrss profesional{" "}
          </a>
          <br />
        </aside>
      </div>
      <footer>Andrés Garcés</footer>
    </>
  );
}

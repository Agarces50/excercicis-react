import { Outlet, Link } from "react-router-dom";
import llista from "./pages/LLista";
import Galeria from "./pages/Galeria";
import Comptador from "./pages/Comptador";
import ToggleButton from "./pages/ToggleButton";
import Home from "./pages/Home";
import Acordio from "./pages/Acordio";
import CounterRedux from "./pages/CounterRedux";
import TicTacToe from "./pages/TicTacToe";
import ReactPlayer from "react-player";

export default function Layout() {
  return (
    <>
      <header>
        <div className="containerMinion">
          <img
            className="minion"
            src={process.env.PUBLIC_URL + "/imagenes/minion.png"}
            alt="imatge"
          />
          <h1>EJERCICIOS DE REACT</h1>
        </div>
      </header>

      <div className="HolyGrail-body">
        <main className="HolyGrail-content">
          <Outlet />

          {/* aqui dentro del outlet es donde van todos los enlaces del router */}
        </main>
        <nav className="HolyGrail-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <br></br>

            <li id="Galeria">
              <Link to="Galeria">Galeria</Link>
            </li>
            <br></br>
            <li>
              <Link to="Comptador">Comptador</Link>
            </li>
            <br></br>
            <li>
              <Link to="ToggleButton">ToggleButton</Link>
            </li>
            <br></br>
            <li>
              <Link to="Acordio">Acordio</Link>
            </li>
            <br></br>

            <li>
              <Link to="Vector">Vector</Link>
            </li>
            <br></br>

            <li>
              <Link to="CounterRedux">CounterRedux</Link>
            </li>
            <br></br>

            <li>
              <Link to="BarraSlider">BarraSlider</Link>
            </li>
            <br></br>

            <li>
              <Link to="Calculadora">Calculadora</Link>
            </li>
            <br></br>

            <li>
              <Link to="Carrusel">Carrussel</Link>
            </li>
            <br></br>

            <li>
              <Link to="RellotgeAnalogic">Rellotge Analogic</Link>
            </li>
            <br></br>

            <li>
              <Link to="RellotgeDigital">Rellotge Digital</Link>
            </li>
            <br></br>
            <li>
              <Link to="NevaPerNadal">Neva per Nadal </Link>
            </li>
            <br></br>
            <li>
              <Link to="ExcercicisArrays">Exercisis Arrays</Link>
            </li>
            <br></br>

            <li>
              <Link to="ApuntsCurs">Apunts Curs</Link>
            </li>
            <br></br>

            <li>
              <Link to="Rest">Todo en Rest</Link>
            </li>
            <br></br>

            <li>
              <Link to="Activitat">Prueba pdf</Link>
            </li>
            <br></br>

            <li>
              <Link to="TicTacToe"> Tres en ratlla</Link>
            </li>
            <br></br>
            <li>
              <Link to="Altres">Altres</Link>
            </li>
          </ul>
        </nav>
      </div>
      <footer>
        {" "}
        Andrés Garcés
        <a href="#">link hacia ejercicios react</a>
        <br />…<a href="#">cv</a>…
        <br />
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          google
        </a>
        <br />
      </footer>
    </>
  );
}

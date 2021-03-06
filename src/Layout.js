import { Outlet, Link } from "react-router-dom";
import llista from "./pages/LLista";
import Galeria from "./pages/Galeria";
import Comptador from "./pages/Comptador";
import ToggleButton from "./pages/ToggleButton";
import Home from "./pages/Home";
import Acordeon from "./pages/Acordeon";
import CounterRedux from "./pages/CounterRedux";
import TicTacToe from "./pages/TicTacToe";
import ReactPlayer from "react-player";
import Nevada from "./pages/Neva";

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
          <div className="conjunto">
            <h1 id="Titulo">
              EXERCICIS DE REACT
              <button id="botoncabecera1"> Aqua opertiu</button>
              <button id="botoncabecera2"> Verd no opertiu</button>
            </h1>
          </div>
        </div>
      </header>

      <div className="HolyGrail-body">
        <main className="HolyGrail-content">
          <Outlet />

          {/* aqui dentro del outlet es donde van todos los enlaces del router */}
        </main>
        <nav className="HolyGrail-nav">
          <ul>
            <li id="Home">
              <Link to="/">Home</Link>
            </li>
            <br></br>

            <li id="Galeria">
              <Link to="Galeria">Galeria</Link>
            </li>
            <br></br>
            <li id="Comptador">
              <Link to="Comptador">Comptador</Link>
            </li>
            <br></br>
            <li id="ToggleButton">
              <Link to="ToggleButton">ToggleButton</Link>
            </li>
            <br></br>
            <li id="Acordio2">
              <Link to="Acordeon">Acordio</Link>
            </li>
            <br></br>

            <li id="SumadorNumeros">
              <Link to="SumadorNumeros">SumadorNumeros</Link>
            </li>
            <br></br>

            <li id="CounterRedux">
              <Link to="CounterRedux">CounterRedux</Link>
            </li>
            <br></br>

            <li id="BarraSlider">
              <Link to="BarraSlider">BarraSlider</Link>
            </li>
            <br></br>

            <li id="Calculadora">
              <Link to="Calculadora">Calculadora</Link>
            </li>
            <br></br>

            <li id="Carrusel">
              <Link to="Carrusel">Carrussel</Link>
            </li>
            <br></br>

            <li id="RellotgeAnalogic">
              <Link to="Relojanalogico">Rellotge Analogic</Link>
            </li>
            <br></br>

            <li id="RellotgeDigital">
              <Link to="RellotgeDigital">Rellotge Digital</Link>
            </li>
            <br></br>
            <li id="NevaPerNadal">
              <Link to="Neva">Neva per Nadal </Link>
            </li>
            <br></br>
            <li id="ExercicisArrays">
              <Link to="ExcercicisArrays">Exercisis Arrays</Link>
            </li>
            <br></br>

            <li id="ApuntsCurs">
              <Link to="ApuntsCurs">Apunts Curs</Link>
            </li>
            <br></br>

            <li id="Rest">
              <Link to="Rest">Todo en Rest</Link>
            </li>
            <br></br>

            <li id="Activitat">
              <Link to="Activitat">Prueba pdf</Link>
            </li>
            <br></br>

            <li id="TicTacToe">
              <Link to="TicTacToe"> Tres en ratlla</Link>
            </li>
            <br></br>
            <li id="Altres">
              <Link to="Altres">Altres</Link>
            </li>
          </ul>
        </nav>
      </div>
      <footer className="pie">
        <h2> Andr??s Garc??s Experience</h2>

        <div className="final">
          <a id="final1" href="#">
            Visita p??gina principal
          </a>
          <a id="final2" href="mailto:agarcesb50@gmail.com">
            Contacta conmigo por correo
          </a>
          <a
            id="final3"
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer"
          >
            Google
          </a>
        </div>
      </footer>
    </>
  );
}

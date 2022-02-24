import { Outlet, Link } from "react-router-dom";
import llista from "./pages/LLista";
import Galeria from "./pages/Galeria";
import Comptador from "./pages/Comptador";
import ToggleButton from "./pages/ToggleButton";
import Home from "./pages/Home";

export default function Layout() {
  return (
    <>
      <header>Exercicis React pericos de los palotes </header>
      <div class="HolyGrail-body">
        <main class="HolyGrail-content">
          <Outlet />
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
              <Link to="Counter-redux">Counter-redux</Link>
            </li>

            {/* {llista.map((item) => (
              <li>
                <Link to={item.path}>{item.element}</Link>
              </li>
            ))} */}
          </ul>
        </nav>
        <aside class="HolyGrail-ads">…</aside>
      </div>
      <footer>Andrés Garcés.</footer>
    </>
  );
}

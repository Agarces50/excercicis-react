import { Outlet, Link } from "react-router-dom";

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
              <Link to="/Galeria">Galeria</Link>
            </li>
          </ul>
        </nav>
        <aside class="HolyGrail-ads">…</aside>
      </div>
      <footer>by David Rodenas</footer>
    </>
  );
}

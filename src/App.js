import "./App.css";
import "./";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Galeria" element={<Galeria />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

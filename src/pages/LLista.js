import Comptador from "./Comptador";
import Galeria from "./Galeria";
import ToggleButton from "./ToggleButton";
import Acordio from "./Acordio";

const llista = [
  { path: "comptador", titol: "Comptador", element: <Comptador /> },
  { path: "galeria", titol: "Galeria de fotos", element: <Galeria /> },
  { path: "toggle-button", titol: "Toggle button", element: <ToggleButton /> },
  { path: "acordio", titol: "Acordio", element: <Acordio /> },
];

export default llista;

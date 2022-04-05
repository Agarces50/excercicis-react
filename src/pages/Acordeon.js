import "./Acordeon.css";
import { useState } from "react";

function Acordio() {
  const [estado, setEstado] = useState("Inactivo");
  const [clicado, setClicado] = useState(0);

  const secciones = [
    {
      titulo: "Menú del dia",
      texto: "Primer plat",
      texto2: "Segon",
      texto3: "Postres",
    },
    {
      titulo: "Carta de vins",
      texto: "Negres",
      texto2: "Blancs",
      texto3: "Espumosos",
    },
    {
      titulo: "Refresc",
      texto: "Cola",
      texto2: "Taronjada",
      texto3: "Llimonada",
    },
  ];

  function mostrar(i) {
    setClicado(i);
    estado === "Activo" ? setEstado("Inactivo") : setEstado("Activo");
  }

  return (
    <div className="Post">
      FEM UN GOT?
      <div className="Titulo">
        {secciones.map((n, i) => (
          <div className="Primer" key={i} onClick={() => mostrar(i)}>
            {secciones[i].titulo}

            <li className={clicado === i ? estado : "Inactivo"}>
              {secciones[i].texto}
            </li>
            <li className={clicado === i ? estado : "Inactivo"}>
              {secciones[i].texto2}
            </li>
            <li className={clicado === i ? estado : "Inactivo"}>
              {secciones[i].texto3}
            </li>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Acordio;

import { useState } from "react";
import "../App.css";
let fotos = [
  "/imagenes/carrusel1.jpg",
  "/imagenes/carrusel2.jpg",
  "/imagenes/carrusel4.jpg",
  "/imagenes/carrusel5.jpg",
  "/imagenes/carrusel6.jpg",
].map((f) => process.env.PUBLIC_URL + f);

export default function Carrusel() {
  const [tancat, setTancat] = useState(false);
  const [imatge, setImatge] = useState(0);
  const [amaga, setMostra] = useState("amaga");
  if (tancat) return null;
  return (
    <div
      id="carrusel"
      onMouseOver={() => setMostra("mostra")}
      onMouseOut={() => setMostra("amaga")}
      style={{ backgroundImage: "url('" + fotos[imatge] + "')" }}
    >
      <div
        id="anterior"
        className={amaga}
        onClick={() =>
          imatge ? setImatge(imatge - 1) : setImatge(fotos.length - 1)
        }
      >
        &lt;
      </div>
      <div
        id="seguent"
        className={amaga}
        onClick={() =>
          imatge < fotos.length - 1 ? setImatge(imatge + 1) : setImatge(0)
        }
      >
        &gt;
      </div>
      <div id="separador"></div>
      <div id="navegador" className={amaga}>
        {fotos.map((n, index) => (
          <div
            key={n}
            className={index === imatge ? "puntas" : "punt"}
            onClick={() =>
              imatge !== index ? setImatge(index) : setImatge(imatge)
            }
          ></div>
        ))}
      </div>
      <div id="tancador" className={amaga} onClick={() => setTancat(true)}>
        X
      </div>
    </div>
  );
}

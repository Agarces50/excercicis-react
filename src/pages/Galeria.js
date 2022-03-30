import { useState } from "react";
import "../App.css";

const imagenes = [
  "/carrusel1.jpg",
  "carrusel2.jpg",
  "carrusel3.jpg",
  "carrusel4.jpg",
  "carrusel5.jpg",
];

function Galeria() {
  const [imagenOriginal, setImagenOriginal] = useState("expandido");

  // nota :por defecto sale este sera el primero que vemos el original con su valor q se lo da el css

  const [fotoClick, setFotoClick] = useState(null);

  // nota : este es el valor por defecto que es 0 asi cuando hacemos clic cambia estado

  const apertura = (fotoAbiertaApertura) => {
    console.log(fotoAbiertaApertura);
    setFotoClick(fotoAbiertaApertura);
    imagenOriginal === "original"
      ? setImagenOriginal("expandido")
      : setImagenOriginal("original");
  };

  // nota:esto quiere decir que tenemos una variable que hemos llamado apertura , se podria llamar de cualquier otra
  // manera, y tiene un parametro que lo llamo foto abierta que en el momento que abra la foto quedara almacenada en
  // el estado pq por defecto era nullo asi que sera esta la ultima que quedara.
  // Entonces decimos que si la imagen original es igual a la medida basica pues que ponga la otra medida que la he
  // llamado expandida y si esta en expandida que ponga la original la medida pequeña.

  // Nota: decimos que la variable imagenes,cada vez que cambie ponga una classe original
  // en css dando un valor en este caso un tamaño. en el de debajo,le ponemos que en orígen
  // el valor es nulo por eso al hacer clikc saldrá algo.

  return (
    <>
      <div className="contenedor">
        {imagenes.map((fotoAbierta) => (
          <div key={fotoAbierta}>
            <img
              onClick={() => apertura(fotoAbierta)}
              className={
                fotoClick === fotoAbierta ? imagenOriginal : "original"

                // nota: en este caso se hace para que cuando hagas onclik ,lo demás se quede peque,
                // asi decimos que cuando haga click que no hay nada pq viene de un valor cero ,
                // en el onlick hace el ternario y en la classe name dice que si la imagen es la expandida
                // las demas sean originales.
                // queremos decir que cuando hagamos click empezara expandido si ponemos original empezara
                // pequeño.
              }
              src={`imagenes/${fotoAbierta}`}
              alt={`imagenes/${fotoAbierta}`}
            />
          </div>
        ))}
      </div>
      <img src="imagenes/limonero.jpg" alt="limonero" />
    </>
  );
}

export default Galeria;

import { useState } from "react";

/*
Mostrar 1 botó
En prémer el botó, canviar el color del botó
En prémer de nou el botó, treure el color del botó
Següents clics repliquen 2,3,2,3,2,3...
Mostrar un text a sota dient si està premut o no
*/

// Nota : como tenemos la funcion del boton , creamos un estado donde decimos que el color por defecto es rojo entonces
// cuando use el estado  cambie el estado en este caso sera el color rojo y cambiara a azul.
// Esto como lo vamos a conseguir vamos a usar una formula condicional donde decimos que si el color es igual a rojo pon azul
// pero si este es ya azul es decir no cumple la premisa entonces pon rojo.( pq se sobreentiende que es azul)

export default function ToggleButton() {
  const [color, setColor] = useState("red");
  const estaPremut = color !== "red";

  // si la const esta premut = color pero diferente de rojo entonces preguntas a bajo esta premut si es igual a color que es rojo no esta premut si
  // es azul entonces si está premut.

  const toggle = () => {
    if (color === "red") setColor("cyan");
    else setColor("red");
  };

  return (
    <>
      <button style={{ background: color }} onClick={toggle}>
        Toggle Me
      </button>
      {estaPremut ? <p>Esta premut</p> : <p>No esta premut</p>}
    </>
  );
}

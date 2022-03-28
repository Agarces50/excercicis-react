import { useState } from "react";
import "../App.css";

function Comptador() {
  const [compte, setCompte] = useState(0);
  const increment = () => {
    setCompte((n) => n + 1);

    if (compte === 10) setCompte(10);
  };

  const decrement = () => {
    setCompte(compte - 1);
    if (compte === 0) setCompte(0);
  };

  const suma5 = () => {
    setCompte((n) => n + 5);
    if (compte + 5 >= 10) setCompte(10);
  };

  // nota: increment lo uso como un parametro no sirve para nada le puedo dar ,
  // otros valores como n, este caso la arrow la metemos para definir la variable
  // nos coge la ultima n y le suma 1, puede decrementar restando lo que quiera

  return (
    <>
      <div className="container">
        <div className="display">
          <h2>{compte}</h2>
        </div>

        <div className="botons1">
          <button onClick={increment} className="increment">
            Increment + 1
          </button>
          <button onClick={decrement} className="decrement">
            Decrement - 1
          </button>
        </div>

        <div className="botons2">
          <button onClick={suma5} className="suma5">
            +5
          </button>
        </div>
      </div>
    </>
  );
}

export default Comptador;

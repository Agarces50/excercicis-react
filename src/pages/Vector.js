export default function Vector() {
  let array = [87, 45, 37, 150];
  let max = Math.max.apply(null, array);
  let minimo = Math.min.apply(null, array);

  const sumaArray = (array) => {
    let suma = 0;
    array.forEach((numero) => {
      suma = suma + numero;
    });

    return suma;
  };

  let resultado = sumaArray(array);

  let tamany = array.length;
  let promedio = resultado / tamany;

  return;

  <h1>
    Estos son los resultados del numero mayor , menor y el promedio
    {max} <br /> {minimo} <br /> {promedio}
  </h1>;
}

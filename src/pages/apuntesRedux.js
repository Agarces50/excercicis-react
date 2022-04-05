// import "./styles.css";
// import { useReducer } from "react";
// import { useEstate } from "react";
// import { useSelector, useDispatch } from "react-redux";

// ESTE ES EL VIDEO NUMERO 1 ( USE STATE NORMAL)

// export default function Counter-redux (){

//   const counter =(state) => state +1
//   const [count, setCount] = useState(3);

//   return (
//     <>
//       <h1>Counter</h1>
//       <div>{count}</div>
//       <button onClick={() => setCount(counter)}>+1</button>
//     </>
//   );
// }

// ESTE ES EL VIDEO 2 CUANDO IMPLEMENTA EL REDUCER Y HACE EL CAMBIO

// export default function CounterRedux (){

//     const[count, dispatch]=useReducer((state,amount)=>state +amount,0);

// Nota:tenemos la variable count que se repite que es la que que se ve en pantalla
// el dispatch es lo que cambia como si fuera el estado actualizado pero en este caso,
// el dispatch hace como de useState i el + 1 o -1 hacen como de argumento
// que es el amount por eso se pone entre parentesis y el 0 que sale al costado es el valor de donde parte
// en este caso desde 0 hay que poner el use reduce pq sino no chuta.

// return (
//         <>
//           <h1>Counter</h1>
//           <div>{count}</div>
//           <button onClick={() => dispatch(+1)}>+1</button>
//           <button onClick={() => dispatch(-1)}>-1</button>
//         </>
//       );
//     }

// ESTE EL VIDEO NUMERO 3 CUANDO HABLA DE LOS PATRONES .... Nota el switch es como si fos un condicional.
// vamos a utilizar el retorno del estado normal en el caso de redux dice que hay decir error nosotros no lo haremos.
// el tema se trata de ir refactorizando un monton de constantes y demás asi podemos dejar el codigo super limpio
// y poder hacer mil cosas pq llamamos al componente o asi.

// nota : ojo si miras el video al final refactoriza y hace cosas más sinteticas lo hago asi ,
// para ver de donde salen las cosas.

// const INCREMENT = "INCREMENT";
// function increment (amount)
// {
//   return {type:INCREMENT,amount};
// }

// const RESET = "RESET";
// function reset() {

//   return { type:RESET};
// }

// function counter ( state, action) {

//   switch (action.type) {

//     case INCREMENT:
//       return state +action.amount ;

//       case RESET :
//       return 0;

//       default:
//         return state ;

//   }

// }

// export default function CounterRedux (){

//   const[count, dispatch]=useReducer((state,amount)=>state +amount,0);

//   return (

//       <>
//         <h1>Counter</h1>
//         <div>{count}</div>
//         <button onClick={() => dispatch({type:"INCREMENT",amount:+1)}>+1</button>
//         <button onClick={() => dispatch({type:"INCREMENT",amount:-1)}>-1</button>
//         <button onClick={() => dispatch({type:"RESET")}>RESET</button>
//       </>

//     );
//   }

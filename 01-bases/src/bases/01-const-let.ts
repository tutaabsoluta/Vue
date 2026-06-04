

export var firstName: string = 'Sergio';
export const lastName: string = 'Duran'
// consts son mas rapidas, mas ligeras, no cambian

// Var tiene scope de funcion. Dentro de la misma función puedes accederla y reasignarla desde cualquier bloque 
// if (true) {
//     var firstName = 'Alonso'
// }
console.log(` ${firstName} ${lastName}`)



const person = {
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zipcode: 10013,
        lat: 14.32,
        long: 34.55
    }
} // as const;

// POdemos cambiar a lo que apuntan los valores de las propiedades
// person.age = 55;
// no podemos cambiarlo por otro objeto

// No crea una copia. person2 y person apuntan al mismo objeto en memoria.
const person2 = person;
person2.lastName = 'Parker'
// en JS los objetos pasan por referencia, cualquier modificacion se aplica por referencia. Eso cambia el lastName tambien en person


// Los valores primitivos pasan por valor

const person3 = { 
    ...person,
    age: 55
 }
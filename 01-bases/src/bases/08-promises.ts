


// console.log('Inicio')

import type { Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";

// // hasta que el hilo principal se resuelve se resuelve el codigo de la promesa
// new Promise(( resolve, reject ) => {
//     resolve('Mi amigo cumplio') 
//     reject('Mi amigo no cumplio')
// }).then(( mensaje ) => {
//     console.log(mensaje)
// }).catch((mensaje) => {
//     console.log(mensaje)
// })
// console.log('Final')

const getHeroByIdAsync = ( id: number ): Promise<Hero> => {
    return new Promise(( res, rej ) => {
        setTimeout(() => {

            const heroe = getHeroById(id);

            heroe ? res(heroe) : rej('Hero not found')
            
        }, 1500);
    })
}

getHeroByIdAsync(100)
    .then((hero) => {console.log(hero.name)})
    .catch((error) => {console.log(error)
})

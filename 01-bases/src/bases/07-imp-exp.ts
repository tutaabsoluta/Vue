import heroes, { owners, type Owner } from "../data/heroes";


// import fuera de llaves es el default

// console.log(heroes)


export const getHeroById = ( id: number ) => {
    return heroes.find( hero => hero.id === id ) 
}

const getHeroesByOwner = ( owner: Owner ) => {
    return heroes.filter( hero => hero.owner == owner )
}

console.log(getHeroesByOwner('DC'))
import heroes, { owners } from "../data/heroes";


// import fuera de llaves es el default

// console.log(heroes)


const getHeroById = ( id: number ) => {
    return heroes.find( hero => hero.id === id ) ?? {}
}

const getHeroesByOwner = ( owner: string ) => {
    return heroes.filter( hero => hero.owner == owner )
}

console.log(getHeroesByOwner('DC'))
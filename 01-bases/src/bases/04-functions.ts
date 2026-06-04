

export function greetPerson( name: string): string {
    return `Hola ${name}`
}

console.log(greetPerson('Sergio'))

const greetPerson2 = ( name: string ): string => `Hello ${name}`

console.log(greetPerson2('Alonso'))

// Cuando la funcion tiene parentesis es que hace un return implicito de un bjeto
const getUser = () => ({
   
        uid: 1234,
        username: 'Tony001'
    
})

console.log(getUser())

const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super Strength',
    },
]

// Toda variable no inicializada es undefined

const hero = heroes.find(hero => hero.id === 2);

console.log(hero?.power)
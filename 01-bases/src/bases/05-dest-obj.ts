
interface Hero {
    name: string
    age: number
    codeName: string
    power?: string
}

interface CreateHeroArgs {
    name: string
    age: number
    codeName: string
    power?: string
}


export const person: Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Iron Man',
}

// const { age, codeName, name, power = 'No powers' } = person

console.log({ age, name, power })

const createHero = ({ name, age, codeName, power }: CreateHeroArgs) => ({
    id: 123,
    name: name,
    codeName: codeName,
    power: power ?? 'No tiene poder'
})
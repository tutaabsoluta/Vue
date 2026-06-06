
interface Hero {
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

const { age, codeName, name, power = 'No powers' } = person

console.log({ age, name, power })

const createHero = ( args: any ) => ({
    id: 123,
    name: args.name,
    codeName: args.codeName,
    power: args.power ?? 'No tiene poder'
})
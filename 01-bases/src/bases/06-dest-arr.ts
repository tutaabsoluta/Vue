



const characters = ['Goku', 'Vegeta', 'Trunks', 'Goten'];

// Extraer valor de arreglo y definir una variable para ese valor

const [ , v ] = characters;

console.log({ v })


const returnArray = () => {
    return [123, 'ABC'] as const;
}

// poner as const el return dice que siempre retorna number, y array.
// Eso permite usar metodos como toLowerCase. Sin el as const, lo trataria como number y no tendriamos el intellisense

const [numbers, letters ] = returnArray();

console.log(letters.toLowerCase())
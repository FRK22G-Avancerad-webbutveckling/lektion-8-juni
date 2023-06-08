// Ett interface är en beskrivning av ett objekt (en sorts mall) över vad objektet innehåller för egenskaper
interface User { // Brukar starta med en stor bokstav
    id?: number, // Frågetecknet innebär att egenskapen inte är obligatorisk
    username: string,
    password: string,
    email: string
}

interface Todo {
    id: number,
    todo: string,
    completed: boolean,
    userId: number
}

export { User, Todo }
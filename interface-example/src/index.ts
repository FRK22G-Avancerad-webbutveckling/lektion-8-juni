import { User, Todo } from './interfaces';

const user: User = {
    username: 'Ada',
    password: 'pwd123',
    email: 'ada@lovelace.com'
}

const todo: Todo = {
    id: 1,
    todo: 'Köpa kaffe',
    completed: false,
    userId: 25
}


const todos: Todo[] = [];

todos.push(todo);

async function getTodos() {
    const response = await fetch('https://dummyjson.com/todos');
    const data = await response.json();

    const todosFromFetch: Todo[] = data.todos;
    console.log(todosFromFetch);
}

getTodos();
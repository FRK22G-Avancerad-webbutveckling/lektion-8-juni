var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const user = {
    username: 'Ada',
    password: 'pwd123',
    email: 'ada@lovelace.com'
};
const todo = {
    id: 1,
    todo: 'Köpa kaffe',
    completed: false,
    userId: 25
};
const todos = [];
todos.push(todo);
function getTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://dummyjson.com/todos');
        const data = yield response.json();
        const todosFromFetch = data.todos;
        console.log(todosFromFetch);
    });
}
getTodos();

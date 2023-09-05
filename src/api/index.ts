import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const todosAPI = {
    getTodos() {
        return instance.get('todos');
    }
}

import { makeAutoObservable } from "mobx";
import { ITodo } from "../interface/todos";
import { todosAPI } from "../api";
import { faker } from '@faker-js/faker';
import { randomDate } from "../utils/utils";

class Todos {
    todos: ITodo[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    async getTodos() {
        try {
            const res = await todosAPI.getTodos();
            this.todos = res.data.map((todo: any) => {
                todo.desc = faker.lorem.lines();
                todo.startDt = randomDate(new Date(2012, 0, 1), new Date()).toLocaleString('en-En', {
                    month: "short", day: "numeric", 
                    hour: "numeric", minute: "numeric"
                }) 
                todo.endDt = randomDate(new Date(2012, 0, 2), new Date()).toLocaleString('en-En', {
                    month: "short", day: "numeric", 
                    hour: "numeric", minute: "numeric"
                }); 
                todo.tags = [{text: 'Entity title', type: 'first'}, {text: 'Front-end', type: 'second'}];
                return todo;
            })
            
        } catch (error) {
            console.error('ERR: getTodos()', error);
        }
    }

    completeTodo = (id: number) => {
        const index = this.todos.findIndex(it => it.id == id);
        this.todos[index].completed = !this.todos[index].completed;

        //this.todos = this.todos.map(it => it.id == id ? {...it, completed: !it.completed} : it);
    }

}

export default new Todos()




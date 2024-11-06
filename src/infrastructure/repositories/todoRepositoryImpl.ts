import { TodoRepository } from "../../application/interfaces/todoRepository"
import { Todo } from "../../domain/entities/todo"
import { TodoType } from "../../types/todo"

const mockupTodos: TodoType[] = [
    {
        "id": 1,
        "title": "Learn React",
        "description": "Learn React from scratch",
        "isDone": true
    },
    {
        "id": 2,
        "title": "Learn Node",
        "description": "Learn React from scratch",
        "isDone": true
    },
    {
        "id": 3,
        "title": "Learn Clean Architecture",
        "description": "Learn React from scratch",
        "isDone": false
    },
    {
        "id": 4,
        "title": "Learn ShadCN",
        "description": "Learn React from scratch",
        "isDone": false
    }
]

const mockupTodoEmpty: Todo[] = []

export class TodoRepositoryImpl implements TodoRepository {
    constructor() { }

    async getTodos(): Promise<Todo[]> {
        return new Promise((resolve, reject) => {
            if (mockupTodos.length === 0) {
                reject(new Error("No todos found !"))
            } else {
                resolve(mockupTodos)
            }
        })
    }

    async addTodo(todo: TodoType): Promise<TodoType> {
        throw new Error("Method not implemented.")
    }

    async updateTodo(todo: TodoType): Promise<TodoType> {
        return new Promise((resolve, reject) => {
            const index = mockupTodos.findIndex(todo => todo.id === todo.id)
            if (index === -1) {
                reject(new Error("Todo not found"))
            } else {
                mockupTodos[index] = todo
                resolve(todo)
                console.log("todo updated !", todo)
            }
        })
    }

    async getTodoById(id: number): Promise<Todo> {
        return new Promise((resolve, reject) => {
            const todo: TodoType | undefined = mockupTodos.find(todo => todo.id === id)
            if (todo === undefined) {
                reject(new Error("Todo not found"))
            } else {
                resolve(todo)
            }
        })
    }
    async deleteTodo(id: number): Promise<void> {
        return new Promise((resolve, reject) => {
            const todo = mockupTodos.find(todo => todo.id === id)
            if (todo === undefined) {
                reject(new Error("Todo not found"))
            } else {
                resolve()
            }
        })
    }
}
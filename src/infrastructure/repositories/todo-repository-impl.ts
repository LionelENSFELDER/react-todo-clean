import { TodoRepository } from "../../domain/repositories/todo-repository"
import { Todo } from "../../domain/entities/todo-entity"
import { TodoType } from "../../types/todo"

const mockupTodos: TodoType[] = [
    new Todo(1, 'Sample Todo 1', 'Description 1', false),
    new Todo(2, 'Sample Todo 2', 'Description 2', true),
]

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

    async addTodo(todo: TodoType): Promise<TodoType[]> {
        return new Promise((resolve, reject) => {
            if (todo.id === undefined) {
                todo.id = mockupTodos.length + 1
            }
            mockupTodos.push(todo)
            resolve(mockupTodos)
            console.log("todo added", todo)
        })
    }

    async updateTodo(todo: TodoType): Promise<Todo[]> {
        return new Promise((resolve, reject) => {
            const index = mockupTodos.findIndex(t => t.id === todo.id)
            if (index === -1) {
                reject(new Error("Todo not found"))
            } else {
                mockupTodos[index] = todo
                resolve(mockupTodos)
            }
        })
    }

    async deleteTodo(todo: TodoType): Promise<Todo[]> {
        return new Promise((resolve, reject) => {
            const todoToDelete = mockupTodos.find(t => t.id === todo.id)
            if (todoToDelete === undefined) {
                reject(new Error("Todo not found"))
            } else {
                mockupTodos.splice(mockupTodos.indexOf(todoToDelete), 1)
                resolve(mockupTodos)
            }
        })
    }
}
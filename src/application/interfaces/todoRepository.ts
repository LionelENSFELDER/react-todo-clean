import { TodoType } from "../../types/todo";

export interface TodoRepository {
    getTodos(): Promise<TodoType[]>;
    addTodo(todo: TodoType): Promise<TodoType>;
    updateTodo(todo: TodoType): Promise<TodoType>;
    deleteTodo(id: number): Promise<void>;
    getTodoById(id: number): Promise<TodoType>;
}
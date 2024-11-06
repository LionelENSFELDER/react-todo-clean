import { TodoRepository } from "../interfaces/todoRepository";
import { Todo } from "../../domain/entities/todo";

export class getTodos {
    constructor(private todoRepository: TodoRepository) { }

    async execute(): Promise<Todo[]> {
        return this.todoRepository.getTodos();
    }
}
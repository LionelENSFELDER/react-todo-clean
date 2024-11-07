import { TodoRepository } from "../interfaces/todo-repository";
import { Todo } from "../../domain/entities/todo-entity";

export class getTodos {
    constructor(private todoRepository: TodoRepository) { }

    async execute(): Promise<Todo[]> {
        return this.todoRepository.getTodos();
    }
}
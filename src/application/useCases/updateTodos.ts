import { Todo } from '../../domain/entities/todo';
import { TodoRepository } from '../interfaces/todoRepository';

export class updateTodos {
    constructor(private todoRepository: TodoRepository) { }

    async execute(todo: Todo): Promise<Todo> {
        return this.todoRepository.updateTodo(todo);
    }
}
import { Todo } from '../../domain/entities/todo-entity';
import { TodoRepository } from '../interfaces/todo-repository';

export class deleteTodo {
    constructor(private todoRepository: TodoRepository) { }

    async execute(todo: Todo): Promise<Todo[]> {
        return this.todoRepository.deleteTodo(todo);
    }
}
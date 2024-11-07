import { Todo } from '../../domain/entities/todo-entity';
import { TodoRepository } from '../../domain/repositories/todo-repository';

export class TodoService {
    constructor(private todoRepository: TodoRepository) { }

    async getTodos(): Promise<Todo[]> {
        return this.todoRepository.getTodos();
    }

    async addTodo(todo: Todo): Promise<Todo[]> {
        return this.todoRepository.addTodo(todo);
    }

    async updateTodo(todo: Todo): Promise<Todo[]> {
        return this.todoRepository.updateTodo(todo);
    }

    async deleteTodo(todo: Todo): Promise<Todo[]> {
        return this.todoRepository.deleteTodo(todo);
    }
}
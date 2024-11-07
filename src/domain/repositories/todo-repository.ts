import { Todo } from '../entities/todo-entity';

export interface TodoRepository {
    getTodos(): Promise<Todo[]>;
    addTodo(todo: Todo): Promise<Todo[]>;
    updateTodo(todo: Todo): Promise<Todo[]>;
    deleteTodo(todo: Todo): Promise<Todo[]>;
}
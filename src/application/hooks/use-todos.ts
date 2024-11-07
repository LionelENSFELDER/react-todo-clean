import { useState, useEffect } from 'react';
import { TodoRepositoryImpl } from '../../infrastructure/repositories/todo-repository-impl';
import { Todo } from '../../domain/entities/todo-entity';

const useTodos = () => {
    const todoRepositoryImpl = new TodoRepositoryImpl();
    const [todos, setTodos] = useState<Todo[]>([]);

    const getTodos = async () => {
        try {
            const todos = await todoRepositoryImpl.getTodos();
            setTodos(todos);
            console.log("todos loaded!", todos);
        } catch (error) {
            console.error("Failed to load todos", error);
        }
    }

    const deleteTodo = async (todo: Todo) => {
        try {
            const updatedTodos = await todoRepositoryImpl.deleteTodo(todo)
            setTodos([...updatedTodos]);

        } catch (error) {
            console.error("useTodos=>Failed to delete todo", error);
        }
    }

    const updateTodo = async (todo: Todo) => {
        try {
            const updatedTodos = await todoRepositoryImpl.updateTodo(todo);
            setTodos([...updatedTodos]);
        } catch (error) {
            console.error("Failed to update todo", error);
        }
    }

    const addTodo = async (todo: Todo) => {
        try {
            const updatedTodos = await todoRepositoryImpl.addTodo(todo);
            setTodos([...updatedTodos]);
        } catch (error) {
            console.error("Failed to add todo", error);
        }
    }

    useEffect(() => {
        getTodos();
    }, [])

    useEffect(() => {
    }, [todos])

    return { todos, deleteTodo, updateTodo, addTodo }
};

export default useTodos;
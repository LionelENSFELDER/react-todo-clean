import React from "react";
import { Todo } from "../../domain/entities/todo-entity";

interface TodoItemProps {
    todo: Todo;
    onToggleUpdate: (todo: Todo) => Promise<void>;
    onDelete: (todo: Todo) => Promise<void>;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleUpdate, onDelete }) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => {
                    todo.isDone = !todo.isDone;
                    onToggleUpdate(todo)
                }}
            />
            <span
                style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
            >
                {todo.title}
            </span>
            <button onClick={() => onDelete(todo)}>Delete</button>
        </div>
    );
}
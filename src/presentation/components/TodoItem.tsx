import React from "react";
import { Todo } from "../../domain/entities/todo";

interface TodoItemProps {
    todo: Todo;
    onToggleComplete: (todo: Todo) => void;
    onDelete: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete, onDelete }) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => onToggleComplete(todo)}
            />
            <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
                {todo.title}
            </span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    );
}
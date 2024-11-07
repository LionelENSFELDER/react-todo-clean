import React, { useEffect } from 'react';
import { Todo } from '../../domain/entities/todo-entity';
import { TodoItem } from './todo-item-component';
import { Box } from '@mui/material';


interface TodoListProps {
    todos: Todo[];
    onToggleUpdate: (todo: Todo) => Promise<void>;
    onDelete: (todo: Todo) => Promise<void>;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggleUpdate, onDelete }) => {
    useEffect(() => {
        console.log("useEffect from todo-list", todos);
    }, [todos]);
    return (
        <Box>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    onToggleUpdate={onToggleUpdate}
                    onDelete={onDelete}
                />
            ))}
        </Box>
    );
}
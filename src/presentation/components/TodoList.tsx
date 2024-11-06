import React from 'react';
import { Todo } from '../../domain/entities/todo';
import { TodoItem } from './TodoItem';
import { Box, Card, Typography } from '@mui/material';


interface TodoListProps {
    todos: Todo[];
    onToggleComplete: (todo: Todo) => void;
    onDelete: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggleComplete, onDelete }) => {

    return (
        <Box>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleComplete={onToggleComplete}
                    onDelete={onDelete}
                />
            ))}
        </Box>
    );
}
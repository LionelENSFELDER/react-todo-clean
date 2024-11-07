import { Box, Card, Typography } from '@mui/material'
import { useEffect } from 'react'
import { TodoList } from '../components/todo-list-component'
import useTodos from '../../application/hooks/use-todos'

const TodoPage = () => {
    const { todos, deleteTodo, updateTodo } = useTodos();

    useEffect(() => {
        console.log("--------------useEffect from todo-page", todos)
    }, [todos])

    if (todos.length === 0) {
        return <Typography>Nothing to do !</Typography>;
    } else {
        return (
            <Box component={Card} sx={{ minWidth: 275, p: 5, boxShadow: 3 }}>
                <Typography>Todo</Typography>
                <TodoList todos={todos} onDelete={deleteTodo} onToggleUpdate={updateTodo} />
            </Box>
        );
    }

}

export default TodoPage
import { Box, Card, Typography } from '@mui/material'
import { TodoList } from '../components/todo-list-component'
import useTodos from '../../application/hooks/use-todos'
import AddTodoComponent from '../components/add-todo-component';

const TodoPage = () => {
    const { todos, deleteTodo, updateTodo, addTodo } = useTodos();

        return (
            <Box component={Card} sx={{ minWidth: 275, p: 5, boxShadow: 3 }}>
                <Typography>Todo</Typography>
                <Box>
                    <AddTodoComponent onToggleAdd={addTodo} />
                </Box>
                {todos.length > 0 && <Typography>Todo List</Typography>}
                <TodoList todos={todos} onDelete={deleteTodo} onToggleUpdate={updateTodo} />
            </Box>
        );


}

export default TodoPage
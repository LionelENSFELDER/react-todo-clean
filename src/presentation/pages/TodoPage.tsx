import { Box, Card, Typography } from '@mui/material'
import { TodoRepositoryImpl } from '../../infrastructure/repositories/todoRepositoryImpl'
import { Todo } from '../../domain/entities/todo'
import { useEffect, useState } from 'react'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { getTodos, addTodo, updateTodo, deleteTodo } from '../../application/useCases'

const TodoPage = () => {
    const todoRepositoryImpl = new TodoRepositoryImpl()
    const getTodos = todoRepositoryImpl.getTodos()
    const deleteTodo = (id: number) => todoRepositoryImpl.deleteTodo(id)
    const updateTodo = (todo: Todo) => todoRepositoryImpl.updateTodo(todo)

    const onToggleComplete = (todo: Todo) => {
        const updatedTodo = { ...todo, isDone: !todo.isDone }
        updateTodo(updatedTodo)
    }

    const onDelete = (id: number) => {
        deleteTodo(id)
    }

    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        const loadTodos = async () => {
            const todos = await getTodos
            setTodos(todos)
            console.log("todo laod !", todos)
        }
        loadTodos()
    }, [getTodos])


    if (todos.length === 0) {
        return <Typography>No todos found !</Typography>
    } else {
        return (
            <Box component={Card} sx={{ minWidth: 275, p: 5, boxShadow: 3 }}>
                <Typography>Todo</Typography>
                <TodoList todos={todos} onDelete={onDelete} onToggleComplete={onToggleComplete} />
            </Box>
        )
    }

}

export default TodoPage
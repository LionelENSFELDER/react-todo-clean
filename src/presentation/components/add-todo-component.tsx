import { useState } from 'react';
import { Todo } from '../../domain/entities/todo-entity';

interface AddTodoComponentProps {
    onToggleAdd: (todo: Todo) => Promise<void>
}

const AddTodoComponent: React.FC<AddTodoComponentProps> = ({ onToggleAdd }) => {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const handleAddTodo = () => {
        const newTodo: Todo = {
            id: Math.floor(Math.random() * 1000),
            title: title,
            description: description,
            isDone: false
        }
        console.log(newTodo)
        onToggleAdd(newTodo)
        setTitle('')
        setDescription('')
    }


    return (
        <div>
            <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
}

export default AddTodoComponent;
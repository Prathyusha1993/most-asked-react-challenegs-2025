import React, { useState } from 'react'

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editInputValue, setEditInputValue] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        if(inputValue.trim() === '') return;
        setTodos([...todos, {text: inputValue, completed: false}]);
        setInputValue('');
    }

    const handleDeleteTodo = (i) => {
        setTodos(todos.filter((_, index) => index !== i));
    };

    const toggleCompleted = (i) => {
        const newTodos = todos.map((todo,index) => (index === i ? {...todo, completed: !todo.completed} : todo));
        setTodos(newTodos);
    }

    const startEditing = (i) => {
        setEditIndex(i);
        setEditInputValue(todos[i].text);
    }

    const cancelEditing = () => {
        setEditIndex(null);
        setEditInputValue('');
    }

    const handleEditTodo = (e, i) => {
        e.preventDefault();
        if(!editInputValue.trim()) return;
        const updatedTodos = todos.map((todo, index) => (index === i ? {...todo, text: editInputValue} : todo));
        setTodos(updatedTodos);
        cancelEditing();
    }
    
  return (
    <div>
        <h3>Todo App</h3>
        <form onSubmit={handleAddTodo}>
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Enter Task' />
            <button type='submit'>Add Task</button>
        </form>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {editIndex === index ? (
                        <>
                        <form onSubmit={(e) => handleEditTodo(e, index)}>
                            <input type='text' value={editInputValue} onChange={(e) => setEditInputValue(e.target.value)} placeholder='Edit todo'/>
                            <button type='submit'>Save</button>
                            <button type='button' onClick={cancelEditing}>Cancel</button>
                        </form>
                        </>
                    ) : (
                        <>
                        <span onClick={() => toggleCompleted(index)}>{todo.text}</span>
                        <button onClick={() => startEditing(index)}>Edit</button>
                        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                        </>
                    )}
                    
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoApp;
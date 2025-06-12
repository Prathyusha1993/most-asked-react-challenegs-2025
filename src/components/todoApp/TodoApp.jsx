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
    };

    const handleDeleteTodo = (i) => {
        setTodos(todos.filter((_,index) => index !== i));
    }

    const startEditing = (index) => {
        setEditIndex(index);
        setEditInputValue(todos[index].text)
    }

    const cancelEditing = () => {
        setEditIndex(null);
        setEditInputValue('');
    }

    const handleEditSubmit = (e, index) => {
        e.preventDefault();
        if(!editInputValue.trim()) return;
        const newTodos = todos.map((todo, i) => (i === index ? {...todo, text: editInputValue} : todo));
        setTodos(newTodos);
        cancelEditing();
    }

    const toggleCompleted = (index) => {
        const newTodos = todos.map((todo,i) => (i === index ? {...todo, completed: !todo.completed} : todo));
        setTodos(newTodos);
    }

  return (
    <div>
        <h2>Todo App</h2>
        <form onSubmit={handleAddTodo}>
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Enter Todo'/>
            <button type='submit'>Add Task</button>
        </form>
        <ul>
        {todos.map((todo, index) => {
            return (
                <li key={index}>
                    {editIndex === index ? (
                        <form onSubmit={(e) => handleEditSubmit(e, index)}>
                            <input type='text' value={editInputValue} onChange={(e) => setEditInputValue(e.target.value)} placeholder='Edit todo'/>
                            <button type='submit'>Save</button>
                            <button type='button' onClick={cancelEditing}>Cancel</button>
                        </form>
                    ) : (
                        <div>
                        <span onClick={() => toggleCompleted(index)}>{todo.text}</span>
                        <button onClick={() => startEditing(index)}>Edit</button>
                        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                        </div>
                    )}
                    
                </li>
            )
        })}
        </ul>
    </div>
  )
}

export default TodoApp;
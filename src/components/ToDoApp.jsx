import { useReducer, useState } from 'react'

import ToDoList from './ToDoList'

import ToDoFormApp from './ToDoFormApp'

const Todos = []

function reducer(state, action) {

    switch (action.type) {
        case 'ADD':
            return [...state, action.payload]
        case 'UPDATE':
            return state.map((item) => item.id === action.payload.id ? action.payload : item)
        case 'DELETE':
            return state.filter((item) => item !== action.payload)
        default:
            return state;

    }
}


export default function ToDoApp() {
    const [toDos, dispatch] = useReducer(reducer, Todos);
    const [toDo, setToDo] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        if (toDo.trim()) {
            dispatch({ type: 'ADD', payload: toDo });
            setToDo('');
        }
    
        };

 return (
    <div>
        <h1>To Do List</h1>
        <ToDoFormApp toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
        <ToDoList toDos={toDos} dispatch={dispatch} />  

 </div>
 );
}
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

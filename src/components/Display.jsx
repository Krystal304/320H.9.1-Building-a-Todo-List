import React from 'react'
import { useState } from 'react'

function Display({toDoList, toDelete, toggleComplete, toEdit}) {

  const [editId, setEditId] = useState(null);
  const [newInputValue, setNewInputValue] = useState('');

  const handleEdit = (e) => { 
    setNewInputValue(e.target.value);
  };

  const handleSaveEdit = () => {
    toEdit(id, newInputValue);
    setEditId(null);
    setNewInputValue('');
  };

  return (
    <div>
      <ul>
        {toDoList.map((toDo)=>
            <li key={toDo.id}>
                {/* {toDo.inputValue} */}
                {editId !== toDo.id ? (
                    <div>
                      <input
                      type = "text"
                      value={newInputValue}
                      onChange={handleEdit}
                      />
                      <button onClick={() => handleSaveEdit(toDo.id)}>Save</button>
                    </div>
                ) : (
                    <div>
                      <span
                      style={{ textDecoration: toDo.isCompleted ? 'line-through' : 'none' }}
                      >{toDo.inputValue}</span>
                      <input
                      type = "text"
                      checked={toDo.isCompleted}
                      onChange={() => toggleComplete(toDo.id)}
                      />
                      <button onClick={() => toDelete(toDo.id)} disabled={toDo.isCompleted}>Delete</button>
                      <button onClick={() => setEditId(toDo.id)}>Edit</button>
                </div>
                )}
            </li>
        )}
        </ul>
    </div>
  )
}

export default Display
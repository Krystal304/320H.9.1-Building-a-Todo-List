import React from 'react'
import { useState } from 'react'

function Display({toDoList, toEdit}) {


  //toDelete, toggleComplete
  const [editId, setEditId] = useState(null);
  const [editeText, setEditeText] = useState('');
  // const [newInputValue, setNewInputValue] = useState('');


  const handleEdit = (e) => { 
    setEditeText(e.target.value);
    // setNewInputValue(e.target.value);
  };

  const handleSaveEdit = (id) => {
    toEdit(id, newInputValue);
    setEditId(null);
    setNewInputValue('');
  };

  return (
    <div>
      <ul>
        {toDoList.map((toDo)=>
            <li key={toDo.id} className={toDo.isCompleted ? 'completed' : ''}>
                 
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
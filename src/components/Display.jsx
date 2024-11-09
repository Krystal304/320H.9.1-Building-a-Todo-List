import React from "react";
import { useState } from "react";

function Display({ toDoList, toEdit, toDelete, toggleComplete }) {
  //toDelete, toggleComplete
  const [editId, setEditId] = useState(null);
  // const [editToDo, setEditToDo] = useState("");

  const [newInputValue, setNewInputValue] = useState("");

  const handleEdit = (e) => {
    // setEditText(e.target.value);
    setNewInputValue(e.target.value);
  };

  const handleSaveEdit = (id) => {
    if (newInputValue.trim() !== "") {
    toEdit(id, newInputValue);
    setEditId(null);
    setNewInputValue("");
    }
  };

  return (
    <div>
      <ul>
        {toDoList.map((toDo) => (
          <li key={toDo.id} className={toDo.isCompleted ? "completed" : ""}>
            {editId === toDo.id ? (
              <div>
                <input
                  type="text"
                  value={newInputValue}
                  onChange={handleEdit}
                  placeholder="Edit task..."
                />
                <button onClick={() => handleSaveEdit(toDo.id)}>Save</button>
                <button onClick={() => setEditId(toDo.id)}>Edit</button>
              </div>
            ) : (
              <div>
                <span
                  style={{
                    textDecoration: toDo.isCompleted ? "line-through" : "none",
                  }}
                >
                  {toDo.inputValue}
                </span>
                <input
                  type="checkbox"
                  checked={toDo.isCompleted}
                  onChange={() => toggleComplete(toDo.id)}
                />
                <button
                  onClick={() => toDelete(toDo.id)} disabled={toDo.isCompleted}>
                  Delete
                </button>
                <button
                  onClick={() => {setEditId(toDo.id);
                  setNewInputValue(toDo.inputValue);
                }}>
                
                  Edit
        
                </button>
              
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Display;

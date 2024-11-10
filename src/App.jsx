import { useState } from "react";

import Input from "./components/Input";
import Display from "./components/Display";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState([]);



  function toAdd(newItem) {
    setToDoList([...toDoList, newItem]);

  }


  function toggleComplete(id) {
    setToDoList(toDoList.map(toDo => 
      toDo.id === id ? { ...toDo, isCompleted: !toDo.isCompleted } : toDo
    ));
  }

  //delete
  function toDelete(id) {
    setToDoList(toDoList.filter(toDo => toDo.id !== id));
  }
  //edit
  function toEdit(id, newValue) {
    setToDoList(toDoList.map(toDo =>
      toDo.id === id ? { ...toDo, inputValue: newValue } : toDo
    ));
  
  }

//newValue
  return (
    <div>
      <h1>To Do List</h1>
      <Input toAddFunction={toAdd} />
      <Display
        toDoList={toDoList}
        toDelete={toDelete}
        toggleComplete={toggleComplete}
        toEdit={toEdit}
      />
    </div>
  );
}

export default App;



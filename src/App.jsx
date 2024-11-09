import { useState } from "react";

import Input from "./components/Input";
import Display from "./components/Display";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState([]);

  //complete todo
  //add

  function toAdd(newItem) {
    setToDoList([...toDoList, newItem]);
    console.log(newItem);
  }

  //toggle
  function toggleComplete(id) {
    const updatedToDoList = toDoList.map((toDo) =>
      toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
    );
    setToDoList(updatedToDoList);
  }

  //delete
  function toDelete(id) {
    const updatedToDoList = toDoList.filter((toDo) => toDo.id !== id);
    setToDoList(updatedToDoList);
  }
  //edit
  function toEdit(id, newValue) {
    const updatedToDoList = toDoList.map((toDo) =>
      toDo.id === id ? { ...toDo, inputValue: newValue } : toDo
    );
    setToDoList(updatedToDoList);
  }

  //toggle
  // function toggleComplete(id){
  //   setToDoList(toDoList.map(toDo=> toDo.id === id ? {...toDo, isCompleted: !toDo.isCompleted} : toDo))
  // }

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

//input add

//display the list

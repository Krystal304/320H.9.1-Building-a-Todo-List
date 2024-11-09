import { useState } from 'react'
import './App.css'
import Input from './components/Input';
import Display from './components/Display';



function App() {
 const [toDoList, setToDoList] = useState([])

  //complete todo
//add

function toAdd(newItem){
setToDoList([...toDoList, newItem]);
console.log(newItem)
}

//delete
function toDelete(id){
  setToDoList(toDoList.filter(toDo=> toDo.id !== id))
 

}
//edit
function toEdit(id, newValue){
  setToDoList(toDoList.map(toDo=> toDo.id === id ? {...toDo, inputValue: newValue} : toDo))

}

//toggle
function toggleComplete(id){
  setToDoList(toDoList.map(toDo=> toDo.id === id ? {...toDo, isCompleted: !toDo.isCompleted} : toDo))
}

  return (
    <div>
     <h1>To Do List</h1>
     <Input toAddFunction={toAdd}/>
     <Display toDoList={toDoList} toDelete={toDelete} toggleComplete={toggleComplete} toEdit={toEdit}/>

    </div>

  );
}

export default App;


//input add

//display the list


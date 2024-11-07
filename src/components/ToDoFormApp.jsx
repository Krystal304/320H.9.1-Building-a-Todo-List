import { useReducer, useState } from 'react'


 export default function ToDoFormApp() {
    const [toDos, setToDos] = useState([]);
    return (
        <div>
            <h1>To Do List</h1>
            <form>
                <input type="text" placeholder='Add To Do'
                value={toDos}
                onChange={(e)=> setToDos(e.target.value)}/>
                <button type="submit">Add</button>

            </form>
        </div>
    )
 }
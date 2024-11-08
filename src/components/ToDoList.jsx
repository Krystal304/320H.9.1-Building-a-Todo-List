

export default function ToDoList({ toDos, dispatch }) {
    console.log(toDos);
    return (
        <ul>
            {toDos.map((toDo) => (
                <li key={toDo.id}>
                    {toDo.text}
                    <input
                        type="checkbox"
                        checked={toDo.isCompleted}
                        onChange={() => dispatch({ type: 'TOGGLE', payload: toDo })}
                    />
                    <button onClick={() => dispatch({ type: 'DELETE', payload: toDo.id })}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}
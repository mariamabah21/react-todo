import { React } from "react";
// file TasksList.js

export default function TasksList({ tasks, dispatch }) {
  return (
    <>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            onChange={() => dispatch({ type: "UPDATE_TODO", task: { ...task, done: !task.done } })}
            type="checkbox"
            checked={task.done}
          />
          {task.text}
          <button onClick={() => dispatch({ type: "DELETE_TODO", taskId: task.id })}>Delete</button>
          // <button onClick={() => dispatch({ type: "EDIT_TODO", taskId: task.id })}>Edit</button>
        </li>
      ))}
    </>
  );
}

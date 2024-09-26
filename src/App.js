import { useReducer } from "react";
import { React } from "react";
import TasksList from "./TodoList";
import AddTodo from "./AddTodo";

let nextId = 3;
const initialTasks = [
  { id: "0", text: "Code", done: false },
  { id: "1", text: "Be happy", done: true },
  { id: "2", text: "Rest", done: false },
];

function reducer(tasks, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...tasks,
        {
          id: nextId++,
          text: action.text,
          done: false,
          editing: false,
        },
      ];

    case "UPDATE_TODO":
      return tasks.map((todo) => {
        if (todo.id === action.task.id) {
          return action.tasks;
        } else {
          return todo;
        }
      });

    case "START_EDITING":
      return tasks.map((todo) => (todo.id === action.id ? { ...todo, editing: true } : todo));

    case "TOGGLE_TODO":
      return tasks.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));

    case "DELETE_TODO":
      return tasks.filter((todo) => todo.id !== action.id);

    case "REMOVE_ALL_TODO":
      return [];
    default:
      return tasks;
  }
}

export default function App() {
  const [tasks, dispatch] = useReducer(reducer, initialTasks);
  // it works the same as the useState
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>To do List!</h1>
      <AddTodo dispatch={dispatch} />
      <TasksList tasks={tasks} dispatch={dispatch} />
      <button onClick={() => dispatch({ type: "REMOVE_ALL_TODO" })}>REMOVE ALL TODOS</button>
    </>
  );
}

// []

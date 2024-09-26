/* eslint-disable react/prop-types */
import { React } from "react";

function AddTodo({ dispatch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch({
      type: "ADD_TODO",
      text: formData.get("text"),
    });
    e.target.reset();
  };

  return (
    <form id="form-id" style={{ margin: 10 }} onSubmit={handleSubmit}>
      <input name="text" type="text" /> <button type="submit">AddTodo</button>
    </form>
  );
}

export default AddTodo;

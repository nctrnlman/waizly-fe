import React, { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task"
        className="p-2 border border-gray-300 w-64"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">
        Add
      </button>
    </form>
  );
};

export default TodoForm;

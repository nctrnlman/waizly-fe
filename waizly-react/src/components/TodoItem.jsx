// src/components/TodoItem.jsx

import React, { useState } from "react";

const TodoItem = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleEdit = () => {
    setEditing(!isEditing);
  };

  const handleSave = () => {
    onEdit(todo.id, editedText);
    setEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div
      className={`transition transform duration-300 ease-in-out ${
        isEditing ? "bg-gray-100" : ""
      }`}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={handleInputChange}
            className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            onClick={handleSave}
            className="ml-2 text-green-500"
            title="Save"
          >
            &#10003;
          </button>
        </>
      ) : (
        <div
          className={`flex items-center ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
            className="mr-2"
          />
          <span>{todo.text}</span>
          <button
            onClick={handleDelete}
            className="ml-4 text-red-500"
            title="Delete"
          >
            &#128465;
          </button>
          <button
            onClick={handleEdit}
            className="ml-2 text-blue-500"
            title="Edit"
          >
            ✎
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;

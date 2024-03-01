import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  test("renders todo list correctly", () => {
    const todos = [
      { id: 1, text: "Task 1", completed: false },
      { id: 2, text: "Task 2", completed: true },
    ];

    const onDeleteMock = jest.fn();
    const onToggleMock = jest.fn();

    render(
      <TodoList todos={todos} onDelete={onDeleteMock} onToggle={onToggleMock} />
    );

    const todoItems = screen.getAllByRole("listitem");
    expect(todoItems).toHaveLength(2);

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();

    userEvent.click(screen.getByText("Delete"));
    expect(onDeleteMock).toHaveBeenCalledWith(1);

    userEvent.click(screen.getByText("Task 2"));
    expect(onToggleMock).toHaveBeenCalledWith(2);
  });
});

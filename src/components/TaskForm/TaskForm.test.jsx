import React from "react";
import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";

import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

import TaskForm from ".";
import { TaskContextProvider } from "../../context/TasksContext";
import { AuthContextProvider } from "../../context/AuthContext";

describe("TaskForm component", () => {
  beforeEach(() => {
    render(
      <AuthContextProvider>
        <TaskContextProvider>
          <TaskForm />
        </TaskContextProvider>
      </AuthContextProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Displays the task form", () => {
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("Displays the add button", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it('Displays the add button with the text "Add Task"', () => {
    expect(screen.getByRole("button")).toHaveTextContent("Add Task");
  });

  it("Handels input", () => {
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("");
    input.value = "Task 1";
    expect(input).toHaveValue("Task 1");
  });
});

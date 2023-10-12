"use client";
import useStore from "@/store/useStore";
import React from "react";

function Board() {
  const { todos, addTodo } = useStore();
  return (
    <>
      <div>
        {todos.map((todo) => (
          <li key={todo.title}>{todo.title}</li>
        ))}
      </div>
      <button type="button" onClick={() => addTodo("testing")}>
        Add
      </button>
    </>
  );
}

export default Board;

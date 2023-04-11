import React from "react";
import { useFetchToDosQuery } from "../store/todoApi";

export default function ToDo() {
  const { data, error, isLoading } = useFetchToDosQuery();

  let content;
  if (isLoading) {
    content = <h1>Loading...</h1>;
  } else if (error) {
    content = <div>Error loading Todos</div>;
  } else {
    content = data.map((todo) => {
      return <li key={todo.id}>{todo.title}</li>;
    });
  }

  return (
    <div>
      <h1>To Dos:</h1>
      <button>Add ToDo</button>
      <ul>{content}</ul>
    </div>
  );
}

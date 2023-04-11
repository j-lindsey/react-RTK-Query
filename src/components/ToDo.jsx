import React from "react";
import { useAddToDosMutation, useFetchToDosQuery } from "../store/todoApi";

export default function ToDo() {
  const { data, error, isLoading } = useFetchToDosQuery();
  const [addToDo, results] = useAddToDosMutation();

  const handleAddToDo = () => {
    addToDo({ id: 1, userId: 1, title: "hello", completed: true });
  };

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
      <button onClick={handleAddToDo}>Add ToDo</button>
      <ul>{content}</ul>
    </div>
  );
}

import React from "react";

/**CHILD COMPONENT */
function TodoItem({ title, isCompleted }) {

  /**TEMPLATE */
  return (
    <li
      style={{
        textDecoration: isCompleted ? "line-through" : "none",
        color: isCompleted ? "gray" : "black",
      }}
    >
      {/* JSX Rule: Wrap JS expressions inside { } */}
      <span>{title}</span>
    </li>
  );
}

/**PARENT COMPONENT */
export default function App() {

  /**TEMPLATE */
  return (
    <main>
      <h1>My To-Do List</h1>
      <ul>
        {/* Passing props down to child components */}
        <TodoItem title="Learn JSX & Components" isCompleted={true} />
        <TodoItem title="Understand Props" isCompleted={false} />
      </ul>
    </main>
  );
}



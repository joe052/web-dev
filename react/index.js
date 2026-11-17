import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello, React 19!</h1>
      <p>Your index.js file is successfully mapped.</p>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

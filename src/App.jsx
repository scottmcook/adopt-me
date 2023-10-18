import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";



// App and components are always capitalized.
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams></SearchParams>
    </div>
  )
};
const container = document.getElementById("root");
// New way of rendering instead of ReactDOM.render.
// It's also a way to opt into new features.
const root = createRoot(container);
root.render(React.createElement(App));

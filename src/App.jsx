import React from "react";
import { createRoot } from "react-dom";

function Pet(props) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
}

// App and components are always capitalized.
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Laura",
      animal: "Dog",
      breed: "Australian Cattle Dog",
    }),
    React.createElement(Pet, {
      name: "Moody",
      animal: "Dog",
      breed: "Australian Cattle Dog",
    }),
    React.createElement(Pet, {
      name: "Binx",
      animal: "Cat",
      breed: "hocus",
    })
  );
};
const container = document.getElementById("root");
// New way of rendering instead of ReactDOM.render.
// It's also a way to opt into new features.
const root = createRoot(container);
root.render(React.createElement(App));

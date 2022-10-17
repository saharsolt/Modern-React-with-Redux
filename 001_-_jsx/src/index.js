// 1) Import the React and React DOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
// 2) Get a reference to the div with id root
const el = document.getElementById("root");
// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);
// 4) Create a component
function App() {
  // const inputValue = "number";
  // const minValue = 5;
  // return <input type={inputValue} min={minValue} />;
  return <input style={{ border: "3px solid red" }} type="number" min={5} />;
}
// 5) Show the component on the screen
root.render(<App />);

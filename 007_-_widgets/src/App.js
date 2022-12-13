import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework.",
  },
  {
    title: "Why use React?",
    content: "React is a popular JS library among engineers.",
  },
  {
    title: "How do you use React",
    content: "You use React by creating components.",
  },
];

const options = [
  { label: "The color Red", value: "red" },
  { label: "The color Green", value: "green" },
  { label: "The shade of Blue", value: "blue" },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
// export default () => {
//   return <h1>APP</h1>;
// };

export default App;

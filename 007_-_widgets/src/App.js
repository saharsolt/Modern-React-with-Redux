import React from "react";
import Accordion from "./components/Accordion";

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

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
// export default () => {
//   return <h1>APP</h1>;
// };

export default App;

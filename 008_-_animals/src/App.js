import { useState } from "react";
import AnimalShow from "./AnimalShow";
function App() {
  const [count, setCount] = useState(0);
  //console.log(useState(50));
  const handleClick = () => {
    // console.log("button was clicked");
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Add animal</button>
      <div>Number of animals: {count}</div>
    </div>
  );
}

export default App;

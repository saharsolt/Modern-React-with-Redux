import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./css/App.css";

function getRandomAnimal() {
  const animals = ["Cat", "Dog", "Rabbit", "Mouse", "Cow", "Gator", "Horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}
function App() {
  const [animals, setAnimals] = useState([]);
  //console.log(useState(50));
  const handleClick = () => {
    // console.log("button was clicked");
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimal = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add animal</button>
      <div className="animal-list">{renderedAnimal}</div>
    </div>
  );
}

export default App;

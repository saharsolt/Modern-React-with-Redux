import Bird from "./img/bird.svg";
import Cat from "./img/cat.svg";
import Cow from "./img/cow.svg";
import Dog from "./img/dog.svg";
import Gator from "./img/gator.svg";
import Horse from "./img/horse.svg";
import Mouse from "./img/mouse.png";
import Rabbit from "./img/rabbit.png";
import Heart from "./img/heart.svg";
import { useState } from "react";
import "./css/AnimalShow.css";

const Map = { Bird, Cat, Cow, Dog, Gator, Horse, Mouse, Rabbit };

function AnimalShow({ type }) {
  const [clicked, setClicked] = useState(0);

  const handleClick = () => {
    setClicked(clicked + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animals" src={Map[type]} />
      <img
        className="heart"
        alt="heart"
        src={Heart}
        style={{ width: 10 + 10 * clicked + "px" }}
      />
    </div>
  );
}

export default AnimalShow;

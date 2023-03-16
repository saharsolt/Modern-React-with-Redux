import React from "react";
import Button from "../components/Button";
import { AiFillCloseCircle, AiFillAndroid } from "react-icons/ai";

function ButtonPage() {
  const handleClick = () => {
    console.log("click!!!!");
  };
  return (
    <div>
      <div>
        <Button success outline rounded onClick={handleClick} className="mb-5">
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <AiFillCloseCircle />
          Hide Adds!
        </Button>
      </div>
      <div>
        <Button warning rounded onMouseLeave={handleClick}>
          <AiFillAndroid />
          Update!
        </Button>
      </div>
      <div>
        <Button primary>Register!</Button>
      </div>
      <div>
        <Button secondary outline>
          Follow!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;

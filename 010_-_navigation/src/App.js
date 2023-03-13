import React from "react";
import Button from "./Components/Button";

function App() {
  return (
    <div>
      <div>
        <Button success outline rounded>
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Hide Adds!
        </Button>
      </div>
      <div>
        <Button warning rounded>
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

export default App;

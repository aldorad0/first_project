import { useState } from "react";

import "./App.css";
import Button from "./components/Button/Button.jsx";

function App() {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Button isDisabled={isDisabled}>Button 1</Button>
      <Button>Button 2</Button>
    </div>
  );
}

export default App;

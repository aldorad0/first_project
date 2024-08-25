import { SyntheticEvent } from "react";
import { Button } from "./components/Button/Button";

function App() {
  const clickHandler = (e: SyntheticEvent) => {
    console.log(e);
  };

  return (
    <div style={{ margin: "24px" }}>
      <h1>Hello World</h1>
      <br />
      <Button label="I am primary" onClick={clickHandler} />
      <br />
      <br />
      <Button label="I am secondary" type="secondary" onClick={clickHandler} />
      <br />
      <br />
      <Button
        label="I am disabled"
        type="secondary"
        isDisabled
        onClick={clickHandler}
      />
    </div>
  );
}

export default App;

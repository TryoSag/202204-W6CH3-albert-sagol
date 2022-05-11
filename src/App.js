import { useState } from "react";
import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  const [numberToCall, setnumberToCall] = useState("");

  const clickNumber = (buttonText) => {
    if (numberToCall.lenght < 10) {
      if (buttonText !== "delete") {
        setnumberToCall(numberToCall.concat(buttonText));
      } else {
        setnumberToCall("");
      }
    }
  };
  const calling = false;

  return (
    <div className="container">
      <Info calling={calling} />
      <main className="phone">
        <Keyboard action={clickNumber} />
        <Actions calling={calling} numberToCall={numberToCall} />
      </main>
    </div>
  );
}

export default App;

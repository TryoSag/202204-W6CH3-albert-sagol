import { useState } from "react";
import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  const calling = false;

  return (
    <div className="container">
      <Info calling={calling} />
      <main className="phone">
        <Keyboard />
        <Actions calling={calling} />
      </main>
    </div>
  );
}

export default App;

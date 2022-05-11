import { useSelector } from "react-redux";
import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  const numbers = useSelector((state) => state.numbers);
  const calling = useSelector((state) => state.calling);

  return (
    <div className="container">
      <Info calling={calling} />
      <main className="phone">
        <Keyboard />
        <Actions numbers={numbers} calling={calling} />
      </main>
    </div>
  );
}

export default App;

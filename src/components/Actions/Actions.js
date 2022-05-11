import { useSelector } from "react-redux";
import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = ({ calling }) => {
  const numbers = useSelector((state) => state.numbers);

  return (
    <div className="actions">
      <Display displayClass={"number"} text={numbers} />
      <Action
        link={"#"}
        actionClass={`call ${numbers.length === 9 ? "active" : ""}`}
        text={"Call"}
      />
      <Action
        link={"#"}
        actionClass={`hang ${calling ? "active" : ""}`}
        text={"Hang"}
      />
    </div>
  );
};
export default Actions;

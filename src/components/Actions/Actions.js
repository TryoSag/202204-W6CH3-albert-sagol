import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = ({ calling, numberToCall }) => {
  return (
    <div className="actions">
      <Display displayClass={"number"} text={numberToCall} />
      <Action
        link={"#"}
        actionClass={`call ${numberToCall.length === 9 ? "active" : ""}`}
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

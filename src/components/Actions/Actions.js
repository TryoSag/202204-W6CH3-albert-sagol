import { useRef } from "react";
import { useDispatch } from "react-redux";
import Action from "../Action/Action";
import Display from "../Display/Display";
import {
  setCallingOffActionCreator,
  setCallingOnActionCreator,
} from "../redux/features/callingSlice";

const Actions = ({ numbers, calling }) => {
  const dispatch = useDispatch();
  const timerId = useRef(null);

  const actionClick = (buttonClicked) => {
    buttonClicked.preventDefault();
    const buttonClickedText = buttonClicked.target.textContent;

    if (numbers.length === 9 && buttonClickedText === "Call") {
      dispatch(setCallingOnActionCreator());

      timerId.current = setTimeout(() => {
        dispatch(setCallingOffActionCreator());
      }, 4000);
    }

    if (calling && buttonClickedText === "Hang") {
      dispatch(setCallingOffActionCreator());
      clearTimeout(timerId.current);
    }
  };

  return (
    <div className="actions">
      <Display displayClass={"number"} text={numbers} />
      <Action
        link={"#"}
        actionClass={`call ${numbers.length === 9 ? "active" : ""}`}
        text={"Call"}
        action={actionClick}
      />
      <Action
        link={"#"}
        actionClass={`hang ${calling ? "active" : ""}`}
        text={"Hang"}
        action={actionClick}
      />
    </div>
  );
};
export default Actions;

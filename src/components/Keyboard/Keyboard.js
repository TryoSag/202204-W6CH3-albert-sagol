import { useDispatch, useSelector } from "react-redux";
import {
  addNumberActionCreator,
  deleteNumbersActionCreator,
} from "../redux/features/numbersSlice";
import buttons from "../../data/buttons";
import Key from "../Key/Key";

const Keyboard = () => {
  const dispatch = useDispatch();
  const numbers = useSelector((state) => state.numbers);

  const action = (text) => {
    if (text === "delete") {
      dispatch(deleteNumbersActionCreator());
    } else if (numbers.length < 9 || numbers === "") {
      dispatch(addNumberActionCreator(text));
    }
  };

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {buttons.map((button) => {
          return (
            <Key
              key={button.text}
              buttonClass={button.class}
              text={button.text}
              action={action}
            />
          );
        })}
      </ol>
    </div>
  );
};
export default Keyboard;

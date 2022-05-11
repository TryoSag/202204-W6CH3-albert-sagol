import { useDispatch, useSelector } from "react-redux";
import {
  addNumberActionCreator,
  deleteNumbersActionCreator,
} from "../redux/features/numbersSlice";

const Key = ({ buttonClass, text }) => {
  const dispatch = useDispatch();
  const numbers = useSelector((state) => state.numbers);

  const clickAction = () => {
    if (text === "delete") {
      dispatch(deleteNumbersActionCreator());
    } else if (numbers.length < 9 || numbers === "") {
      dispatch(addNumberActionCreator(text));
    }
  };

  return (
    <li>
      <button className={buttonClass} onClick={clickAction}>
        {text}
      </button>
    </li>
  );
};
export default Key;

import buttons from "../../data/buttons";
import Key from "../Key/Key";

const Keyboard = ({ action }) => {
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

import PropTypes from "prop-types";

const Key = ({ buttonClass, text, action }) => {
  const clickAction = () => {
    action(text);
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

Key.propTypes = {
  prop: PropTypes.shape({
    buttonClass: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }),
};

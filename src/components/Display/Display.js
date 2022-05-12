import PropTypes from "prop-types";

const Display = ({ displayClass, text }) => {
  return <span className={displayClass}>{text}</span>;
};
export default Display;

Display.propTypes = {
  prop: PropTypes.shape({
    displayClass: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

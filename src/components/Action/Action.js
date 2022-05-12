import PropTypes from "prop-types";

const Action = ({ link, actionClass, text, action }) => {
  return (
    <a href={link} className={actionClass} onClick={action}>
      {text}
    </a>
  );
};
export default Action;

Action.propTypes = {
  prop: PropTypes.shape({
    link: PropTypes.string.isRequired,
    actionClass: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }),
};

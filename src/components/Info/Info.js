import PropTypes from "prop-types";

const Info = ({ calling }) => {
  return <span className={`message ${calling ? "" : "off"}`}>Calling...</span>;
};
export default Info;

Info.propTypes = {
  prop: PropTypes.shape({
    calling: PropTypes.bool.isRequired,
  }),
};

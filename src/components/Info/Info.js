const Info = ({ calling }) => {
  return <span className={`message ${calling ? "" : "off"}`}>Calling...</span>;
};
export default Info;

const Action = ({ link, actionClass, text }) => {
  return (
    <a href={link} className={actionClass}>
      {text}
    </a>
  );
};
export default Action;

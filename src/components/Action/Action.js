const Action = ({ link, actionClass, text, action }) => {
  return (
    <a href={link} className={actionClass} onClick={action}>
      {text}
    </a>
  );
};
export default Action;

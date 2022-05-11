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

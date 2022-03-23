function Button() {
  const clickHandler = () => {
    localStorage.clear();
  };
  return <button onClick={clickHandler}></button>;
}

export default Button;

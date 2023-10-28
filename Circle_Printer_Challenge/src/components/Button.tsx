const Button = ({
  children,
  onClickHandler,
}: {
  children: string;
  onClickHandler: VoidFunction;
}) => {
  return <button onClick={onClickHandler}>{children}</button>;
};

export default Button;

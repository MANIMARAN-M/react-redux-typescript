import React, { FC, MouseEventHandler } from "react";

interface buttonProps {
  handlechange: MouseEventHandler<HTMLButtonElement>;
  children: string;
}
const Button: FC<buttonProps> = ({ handlechange, children }): JSX.Element => {
  console.log("rendering button", children);
  return <button onClick={handlechange}>{children}</button>;
};

export default React.memo(Button);

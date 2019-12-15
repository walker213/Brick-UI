import React from "react";
import classnames from "classnames";
import Icon from '../icon';
import "./index.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
  disabled?: boolean;
  size?: "large" | "small" | "default";
  icon?: string;
  onClick?: React.MouseEventHandler;
}

const Button: React.FunctionComponent<Props> = ({
  size = "default",
  disabled = false,
  icon,
  className,
  children,
  ...restProps
}) => {
  return (
    <button className={classnames('bui-btn',className)} {...restProps}>
      {icon?<Icon name={icon} />:null}
      {children}
    </button>
  );
};

export default Button;

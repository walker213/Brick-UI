import React from "react";
import classnames from "classnames";
import { addClassPrefixHOF } from "../../utils/classes";
import Icon from "../icon";
import "./index.scss";

const acp = addClassPrefixHOF("bui-btn");

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
  const sizeClassName =
    size === "large" ? acp("lg") : size === "small" ? acp("sm") : null;
  return (
    <button
      className={classnames(acp(), sizeClassName, className)}
      {...restProps}
    >
      {icon ? <Icon name={icon}></Icon> : null}
      {typeof children === "string" ? <span>{children}</span> : null}
    </button>
  );
};

export default Button;

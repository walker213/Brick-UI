import React from "react";
import classnames from "classnames";
import { addClassPrefixHOF } from "../../utils/classes";
import { Icon } from "../../index";
import "./index.scss";

const acp = addClassPrefixHOF("bui-btn");

interface Props extends React.HTMLAttributes<HTMLElement> {
  disabled?: boolean;
  size?: "large" | "small";
  type?: "primary" | "danger" | "dashed";
  icon?: string;
  onClick?: React.MouseEventHandler;
}

const Button: React.FunctionComponent<Props> = ({
  size,
  type,
  icon,
  className,
  children,
  ...restProps
}) => {
  const types = ["primary", "danger", "dashed"];
  const typeClassName = types.includes(type) ? acp(type) : null;
  const sizeClassName =
    size === "large" ? acp("lg") : size === "small" ? acp("sm") : null;
  const btnClassName = classnames(
    acp(),
    sizeClassName,
    typeClassName,
    className
  );
  return (
    <button className={btnClassName} {...restProps}>
      {icon ? <Icon name={icon}></Icon> : null}
      {typeof children === "string" ? <span>{children}</span> : null}
    </button>
  );
};

export default Button;

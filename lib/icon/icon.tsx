import React from "react";
import classnames from "classnames";
import "./importIcon";
import "./icon.scss";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({
  className,
  name,
  ...restProps
}) => {
  return (
    <svg className={classnames("bui-icon", className)} {...restProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;

import React from "react";
import classnames from "classnames";
import "./importIcon";
import "./icon.scss";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  const { className, ...restProps } = props;
  return (
    <svg className={classnames("bui-icon",className)} {...restProps}>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};

export default Icon;

import React from "react";
import "./importIcon";
import "./icon.scss";

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <svg className='bui-icon'>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};

export default Icon;

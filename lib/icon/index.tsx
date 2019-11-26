import React from "react";
import classnames from "classnames";
import "./importIcon";  // 引入的svg文件，经过svg-sprite-loader处理会引入到html中？
import "./index.scss";

interface Props extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<Props> = ({
  className,
  name,
  ...restProps
}) => {
  return (
    <svg className={classnames("bui-icon", className)} {...restProps}>
      {/* import svg文件后才可以这样使用？ */}
      <use xlinkHref={`#${name}`} />  
    </svg>
  );
};

export default Icon;

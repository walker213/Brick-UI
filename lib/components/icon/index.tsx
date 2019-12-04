import React from "react";
import classnames from "classnames";
import "./importIcon";  // 引入的svg文件，经过svg-sprite-loader处理会引入到html中？
import "./index.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
  name: string;
}

const Icon: React.FunctionComponent<Props> = ({
  className,
  name,
  ...restProps
}) => {
  return (
    <i className={classnames("bui-icon", className)} {...restProps}>
      <svg>
        {/* import svg文件后才可以这样使用？ */}
        <use xlinkHref={`#${name}`} />
      </svg>
    </i>
  );
};

export default Icon;

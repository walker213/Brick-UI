import React from "react";
import classnames from "classnames";

interface Props extends React.HTMLAttributes<HTMLElement> {
  name: string;
}

const Sider: React.FunctionComponent<Props> = props => {
  const { className, ...restProps } = props;
  return (
    <aside className={classnames(className, "bui-layout-sider")} {...restProps}>
      {props.children || "sider"}
    </aside>
  );
};

export default Sider;

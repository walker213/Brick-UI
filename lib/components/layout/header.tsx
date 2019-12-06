import React from "react";
import classnames from "classnames";

interface Props extends React.HTMLAttributes<HTMLElement> {
  name: string;
}

const Header: React.FunctionComponent<Props> = props => {
  const { className, ...restProps } = props;
  return (
    <header className={classnames(className, "bui-layout-header")} {...restProps}>
      {props.children || "header"}
    </header>
  );
};

export default Header;

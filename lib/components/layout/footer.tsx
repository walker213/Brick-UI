import React from "react";
import classnames from "classnames";

interface Props extends React.HTMLAttributes<HTMLElement> {
  name: string;
}

const Footer: React.FunctionComponent<Props> = props => {
  const { className, ...restProps } = props;
  return (
    <footer className={classnames(className, "bui-layout-footer")} {...restProps}>
      {props.children || "footer"}
    </footer>
  );
};

export default Footer;

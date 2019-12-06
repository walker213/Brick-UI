import React from "react";
import classnames from "classnames";

interface Props extends React.HTMLAttributes<HTMLElement> {
  name: string;
}

const Content: React.FunctionComponent<Props> = props => {
  const { className, ...restProps } = props;
  return (
    <main className={classnames(className, "bui-layout-content")} {...restProps}>
      {props.children || "content"}
    </main>
  );
};

export default Content;

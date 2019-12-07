import React, { ReactElement } from "react";
import classnames from "classnames";
import { addClassPrefixHOF } from "../../utils/classes";
import Header from "./header";
import Footer from "./footer";
import Content from "./content";
import Sider from "./sider";
import "./index.scss";

const acp = addClassPrefixHOF('bui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {}

type Fhp<T> = React.FunctionComponent<T> & {
  Header: React.FunctionComponent;
  Footer: React.FunctionComponent;
  Content: React.FunctionComponent;
  Sider: React.FunctionComponent;
};

const Layout: Fhp<Props> = props => {
  const { className, children, ...restProps } = props;
  const hasAside =
    Array.isArray(children) &&
    children.some(item => (item as ReactElement).type === Sider);
  return (
    <section
      className={classnames(className, acp(), {
        [acp('hasAside')]: hasAside
      })}
      {...restProps}
    >
      {children}
    </section>
  );
};

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sider = Sider;

export default Layout;

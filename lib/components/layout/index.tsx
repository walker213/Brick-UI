import React from "react";
import classnames from "classnames";
import Header from "./header";
import Footer from "./footer";
import Content from "./content";
import Sider from "./sider";
import './index.scss'

interface Props extends React.HTMLAttributes<HTMLElement> {}

type Fhp<T> = React.FunctionComponent<T> & {
  Header: React.FunctionComponent;
  Footer: React.FunctionComponent;
  Content: React.FunctionComponent;
  Sider: React.FunctionComponent;
};

const Layout: Fhp<Props> = props => {
  const { className, ...restProps } = props;
  return (
    <section className={classnames(className, "bui-layout")} {...restProps}>
      {props.children}
    </section>
  );
};

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sider = Sider;

export default Layout;

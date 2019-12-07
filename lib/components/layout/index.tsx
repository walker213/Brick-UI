import React, { ReactElement } from "react";
import classnames from "classnames";
import { addClassPrefixHOF } from "../../utils/classes";
import "./index.scss";

const acp = addClassPrefixHOF("bui-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {}

type ComponentWithExtraApi<T> = React.FunctionComponent<T> & {
  Header: React.FunctionComponent;
  Footer: React.FunctionComponent;
  Content: React.FunctionComponent;
  Sider: React.FunctionComponent;
};

const Layout: ComponentWithExtraApi<Props> = props => {
  const { className, children, ...restProps } = props;
  const hasAside =
    Array.isArray(children) &&
    children.some(item => (item as ReactElement).type === Sider);
  return (
    <section
      className={classnames(className, acp(), {
        [acp("hasAside")]: hasAside
      })}
      {...restProps}
    >
      {children}
    </section>
  );
};

const Header: React.FunctionComponent<Props> = props => {
  const { className, children, ...restProps } = props;
  return (
    <header className={classnames(className, acp("header"))} {...restProps}>
      {children}
    </header>
  );
};
const Footer: React.FunctionComponent<Props> = props => {
  const { className, children, ...restProps } = props;
  return (
    <footer className={classnames(className, acp("footer"))} {...restProps}>
      {children}
    </footer>
  );
};
const Content: React.FunctionComponent<Props> = props => {
  const { className, children, ...restProps } = props;
  return (
    <main className={classnames(className, acp("content"))} {...restProps}>
      {children}
    </main>
  );
};
const Sider: React.FunctionComponent<Props> = props => {
  const { className, children, ...restProps } = props;
  return (
    <aside className={classnames(className, acp("sider"))} {...restProps}>
      {children}
    </aside>
  );
};

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sider = Sider;

export default Layout;

import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import './index.scss';
import { Layout } from "../lib";
import IconExample from "../lib/components/icon/iconExample";
import DialogExample from "../lib/components/dialog/dialogExample";
import LayoutExample from "../lib/components/layout/layoutExample";
import ButtonExample from "../lib/components/button/buttonExample";

const { Header, Footer, Sider, Content } = Layout;

export const Index = () => {
  return (
    <Router>
      <Layout className="bui-preview">
        <Header>Brick</Header>
        <Layout>
          <Sider>
            <h2>组件</h2>
            <ul>
              <li>
                <NavLink to="/icon">Icon</NavLink>
              </li>
              <li>
                <NavLink to="/button">Button</NavLink>
              </li>
              <li>
                <NavLink to="/dialog">Dialog</NavLink>
              </li>
              <li>
                <NavLink to="/layout">Layout</NavLink>
              </li>
            </ul>
          </Sider>
          <Content>
            <Route path="/icon" component={IconExample}></Route>
            <Route path="/button" component={ButtonExample}></Route>
            <Route path="/dialog" component={DialogExample}></Route>
            <Route path="/layout" component={LayoutExample}></Route>
          </Content>
        </Layout>
        <Footer>&copy; lwg</Footer>
      </Layout>
    </Router>
  );
};

ReactDom.render(<Index />, document.getElementById("root"));

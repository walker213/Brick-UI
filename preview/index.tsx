import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './index.scss';
import { Layout } from "../lib";
import IconExample from "../lib/components/icon/iconExample";
import DialogExample from "../lib/components/dialog/dialogExample";
import LayoutExample from "../lib/components/layout/layoutExample";

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
                <Link to="/icon">Icon</Link>
              </li>
              <li>
                <Link to="/button">Button</Link>
              </li>
              <li>
                <Link to="/dialog">Dialog</Link>
              </li>
              <li>
                <Link to="/layout">Layout</Link>
              </li>
            </ul>
          </Sider>
          <Content>
            <Route path="/icon" component={IconExample}></Route>
            <Route path="/dialog" component={DialogExample}></Route>
            <Route path="/layout" component={LayoutExample}></Route>
          </Content>
        </Layout>
        <Footer>lwg-Brick UI</Footer>
      </Layout>
    </Router>
  );
};

ReactDom.render(<Index />, document.getElementById("root"));

import React from "react";
import { Layout } from "../../index";
import './layoutExample.scss'

const { Header, Footer, Content, Sider } = Layout;

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div className='bui-example'>
      <section>
        <h1>第一个例子</h1>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </section>
      <section>
        <h1>第二个例子</h1>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </section>
      <section>
        <h1>第三个例子</h1>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Content>Content</Content>
            <Sider>Sider</Sider>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </section>
      <section>
        <h1>第四个例子</h1>
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </section>
    </div>
  );
};

export default LayoutExample;

import React from "react";
import { Layout } from "../../index";

const { Header, Footer, Content, Sider } = Layout;

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div>
      <section>
        <h1>第一个例子</h1>
        <Layout>
          <Header />
          <Content />
          <Footer />
        </Layout>
      </section>
      <section>
        <h1>第二个例子</h1>
        <Layout>
          <Header />
          <Layout>
            <Sider />
            <Content />
          </Layout>
          <Footer />
        </Layout>
      </section>
      <section>
        <h1>第三个例子</h1>
        <Layout>
          <Header />
          <Layout>
            <Content />
            <Sider />
          </Layout>
          <Footer />
        </Layout>
      </section>
      <section>
        <h1>第四个例子</h1>
        <Layout>
          <Sider />
          <Layout>
            <Header />
            <Content />
            <Footer />
          </Layout>
        </Layout>
      </section>
    </div>
  );
};

export default LayoutExample;

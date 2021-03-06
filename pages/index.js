import React from "react";

import Head from "../components/head";

import { Col } from "antd";

import Intro from "../components/intro/intro";
import BlogPosts from "../components/blog-posts/blog-posts";

class Index extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Head title="Blog of Tu" />
        <Col lg={6}>
          <Intro />
        </Col>
        <Col lg={18}>
          <BlogPosts />
        </Col>
      </React.Fragment>
    );
  }
}

export default Index;

import React from "react";

import "./index.scss";

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
        <Col lg={12}>
          <BlogPosts />
        </Col>
      </React.Fragment>
    );
  }
}

export default Index;

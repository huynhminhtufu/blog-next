import React from "react";

import Head from "../components/head";

import { Col } from "antd";

import Intro from "../components/intro/intro";
import BlogDetails from "../components/blog-details/blog-details";

class Post extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Head title="Ultimate React Develop 3 in 1" />
        <Col lg={6}>
          <Intro />
        </Col>
        <Col lg={18}>
          <BlogDetails />
        </Col>
      </React.Fragment>
    );
  }
}

export default Post;

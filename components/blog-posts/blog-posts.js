import React from "react";

import "./blog-posts.scss";

import { Card } from "antd";
const { Meta } = Card;

class BlogPosts extends React.PureComponent {
  render() {
    return (
      <div className="blog-posts">
        <Card
          hoverable
          className="element"
          cover={
            <img
              alt="example"
              src="https://mrhmt.com/assets/img/react-ultimate.jpg"
            />
          }
        >
          <Meta title="Ultimate React Develop 3 in 1" description="Recently, in the SWD course at my university, the final project was to create a..." />
        </Card>
        <Card
          hoverable
          className="element"
          cover={
            <img
              alt="example"
              src="https://mrhmt.com/assets/img/mobiclix-office.jpg"
            />
          }
        >
          <Meta title="Back to office from OJT days" description="Finally, after long days throwing resume on LinkedIn, scheduled to interview in a few places,..." />
        </Card>
      </div>
    );
  }
}

export default BlogPosts;

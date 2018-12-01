import React from "react";

import "./blog-details.scss";

class BlogDetails extends React.PureComponent {
  render() {
    return (
      <div className="blog-details">
        <div className="time">1 Dec 2018</div>
        <h1>Ultimate React Develop 3 in 1</h1>
        <p>
          Recently, in the SWD course at my university, the final project was to
          create a web application, a mobile application (Android/iOS) that used
          the same backend (using Restful API). Then, I discovered a very fast
          and efficient way to implement, that’s use Javascript React: an iOS
          app, and Android app, and a web app, all powered largely by the same
          codebase.
        </p>
        <h2>What am I building</h2>
        <p>
          I’m building an online houses-for-rent app, where users can do things
          like add new house for rent, remove after posted, add to favorite. And
          the web admin can do approves/reject the houses, user management…
        </p>
        <p>
          My apps manage state with Redux and each app speaks to the same
          backend API powered by Firebase SDK.
        </p>
      </div>
    );
  }
}

export default BlogDetails;

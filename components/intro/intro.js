import React from "react";
import Link from "next/link";

import "./intro.scss";
import { Avatar, Icon } from "antd";

class Intro extends React.PureComponent {
  render() {
    return (
      <div className="intro">
        <Link prefetch href="/">
          <a>
            <Avatar
              size={200}
              className="avatar"
              shape="square"
              src={
                "https://cdn-images-1.medium.com/max/500/1*vHUiXvBE0p0fLRwFHZuAYw.gif"
              }
            />
          </a>
        </Link>
        <h1 className="name">Tu Blog</h1>
        <p className="description">Frontend Engineer</p>
        <div className="social-links">
          <Icon type="facebook" theme="filled" />
          <Icon type="skype" theme="filled" />
          <Icon type="github" theme="filled" />
          <Icon type="linkedin" theme="filled" />
        </div>
        <div className="about">
          <p>I love NodeJS, Golang and code React everyday.</p>
          <p>
            I'm a macOS user and enjoy turning complex problems into simple.
          </p>
        </div>
        <div className="links">
          <p className="description">built with:</p>
          <img
            src="/static/links-icons/golang.png"
            className="dev-icon"
            alt="golang"
          />
          <img
            src="/static/links-icons/react.png"
            className="dev-icon"
            alt="react"
          />
          <img
            src="/static/links-icons/mysql.png"
            className="dev-icon"
            alt="mysql"
          />
          <img
            src="/static/links-icons/docker.png"
            className="dev-icon"
            alt="docker"
          />
          <img
            src="/static/links-icons/gcp.png"
            className="dev-icon"
            alt="gcp"
          />
        </div>
      </div>
    );
  }
}

export default Intro;

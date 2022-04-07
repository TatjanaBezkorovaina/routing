import React from "react";
import "./post.scss";

const Post = (props) => {
  return (
    <>
      <div className="post">
        <div className="post__wrapper">
          <span className="post__title">{props.title}</span>
          <span className="post__text">{props.text}</span>
        </div>
      </div>
    </>
  );
};

export default Post;

import React, { useState } from "react";
import "./posts.scss";
import Post from "../post/Post";

const Posts = () => {
  const staticPosts = [
    {
      title: "feedback 1",
      text: "ggggggggggoooooooooooddddddddd!!!",
      id: "post-1",
    },
    {
      title: "feedback 2",
      text: "wwwwwwwwooooooow)))",
      id: "post-2",
    },
  ];
  const localPosts = JSON.parse(localStorage.getItem("posts"));

  const [posts, setPosts] = useState(localPosts ? localPosts : staticPosts);

  const [title, setTitle] = useState("");

  const addPost = (e) => {
    e.preventDefault();
    console.log(title);

    setPosts([
      ...posts,
      {
        title: title,
        id: Date.now(),
      },
    ]);
    setTitle("");
    localStorage.setItem("posts", JSON.stringify(posts));
  };

  return (
    <>
      <div className="posts">
        <div className="posts__wrapper">
          {/* Form */}
          <form className="posts__form">
            <input
              value={title}
              type="text"
              placeholder="Поле для вводу тексту"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <button type="submit" onClick={addPost}>
              <span>Додати відгук</span>
            </button>
          </form>
          {/* List */}
          <ul className="posts__list">
            {posts.map((post) => (
              <li className="posts__item" key={post.id}>
                <Post title={post.title} text={post.text} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Posts;

import React from "react";
import { Link } from "react-router-dom";

export const Posts = (props) => {
  return (
    <div>
      Posts
      <ol>
        {props.posts.map((post) => {
          return (
            <li key={post.slug} >
              <Link to={"/posts/" + post.slug} className="link">
               {post.title}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};


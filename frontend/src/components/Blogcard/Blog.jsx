import React, { useState } from "react";
import "./Blog.css";

const Blog = ({title,content}) => {
  return (
      <div className="blog">
        <div className="blog-head">
          <h2>{title}</h2>
        </div>
        <div className="blog-body">
          <p>
            {content}
          </p>
        </div>
      </div>
  );
};

export default Blog;

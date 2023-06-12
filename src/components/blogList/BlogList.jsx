import React from "react";
import "./BlogList.css";

function BlogList({ content,title }) {
  return (
    <p className="blogTitle">
      <span>{title} : </span>
      <br />
      {content ?? "Not Found"}
    </p>
  );
}

export default BlogList;

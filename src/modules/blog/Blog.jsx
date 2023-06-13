import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlogList from "../../components/blogList/BlogList";
import apiCall from "../../services/apiCall";
import "./Blog.css";

function Blog() {
  const { id } = useParams();
  const [blog, setBlogs] = useState({});

  useEffect(() => {
    const getBlogs = async () => {
      const blogData = await apiCall.get(`/posts/${id}`);
      setBlogs(blogData.data);
    };
    getBlogs();
  },[]);
  return (
    <div className="blog-container">
      <BlogList title={"UserId"} content={blog.userId} />
      <BlogList title={"Title"} content={blog.title} />
      <BlogList title={"Content"} content={blog.body} />
      <Link to={"/"}>
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
}

export default Blog;

import React, { useEffect, useState } from "react";
import Cardrender from "../../components/cardRenderer/CardRenderer";
import apiCall from "../../services/apiCall";

function BlogPost() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const blogData = await apiCall.get("/posts");
      setBlogs(blogData.data);
    };
    getBlogs();
  },[]);

  return (
    <div>
      <Cardrender data={blogs} />
    </div>
  );
}

export default BlogPost;

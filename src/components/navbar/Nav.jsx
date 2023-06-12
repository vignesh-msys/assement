import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

function Nav({ updateString }) {
  const location = useLocation();
  return (
    <div className="container">
      <div className="navcontainer">
        <h2>Blog Posts</h2>
        <Link className="addnotes" to={"/addnotes"}>
          Add Notes
        </Link>
        <Link className="addnotes" to={"/login"}>
          Login
        </Link>
        <Link className="addnotes" to={"/counter"}>
          Counter Page
        </Link>
      </div>
      <div className="navbox">
        <h5 className="username">
          Welcome <span>VICKY</span>{" "}
        </h5>
      </div>
    </div>
  );
}

export default Nav;

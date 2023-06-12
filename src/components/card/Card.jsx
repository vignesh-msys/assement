import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Card.css";

function Card({ blogData }) {
  const Navigate = useNavigate();

  return (
    <div onClick={() => Navigate(`/${blogData.id}`)} className="cardContainer">
      <p className="title">{blogData.title || ""}</p>
      <p className="des">{blogData.body || ""}</p>
      <p className="userId">
        <span>User Id : </span> {blogData.userId}
      </p>
    </div>
  );
}

export default Card;

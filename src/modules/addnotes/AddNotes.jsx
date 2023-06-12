import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PopUp from "../../components/popup/PopUp";
import apiCall from "../../services/apiCall";
import "./AddNotes.css";

function AddNotes() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState("");
  const handlepopUp = () => {
    setVisible((prev) => !prev);
  };

  const formHandler = (e) => {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((fields) => {
      if (!fields.name) return;
      formData[fields.name] = fields.value;
    });
    console.log(formData);
    apiCall
      .post("/posts", formData)
      .then((data) => {
        setVisible(true);
        setContent("Data Added Successfully");
      })
      .catch((e) => {
        setVisible(true);
        setContent("Something Went Wrong");
      });
  };
  return (
    <div className="edit-container">
      {visible && <PopUp content={content} onClickHandler={handlepopUp} />}
      <div className="edit-title">
        <h3>Add Blog</h3>
      </div>
      <form onSubmit={formHandler}>
        <label htmlFor="uId">
          User Id <span>*</span>
        </label>
        <br />
        <input
          id="uId"
          name="userId"
          placeholder="User Id"
          className="titleEditor"
          required
        />
        <br />
        <label htmlFor="title">
          Title <span>*</span>
        </label>
        <br />
        <input
          id="title"
          name="title"
          placeholder="Title"
          className="titleEditor"
          required
        />
        <br />
        <label htmlFor="des">
          Context <span>*</span>
        </label>
        <br />
        <input
          name="des"
          id="des"
          className="desEditor"
          placeholder="Content"
          required
        />
        <br />
        <button type="button" onClick={() => navigate("/")} className="cancel">
          Cancel
        </button>
        <button className="save" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default AddNotes;

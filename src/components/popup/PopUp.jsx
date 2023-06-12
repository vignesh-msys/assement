import React from "react";
import "./PopUp.css";

function PopUp({ content, onClickHandler }) {
  return (
    <div className="stringStyle">
      <button className="popupBtn" onClick={onClickHandler}>
        X
      </button>
      {content}
    </div>
  );
}

export default PopUp;

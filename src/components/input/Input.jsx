import React from "react";
import "./Input.css";

function Input({ changeHandler, placeHolder, value, required, type }) {
  return (
    <input
      className="input"
      onChange={changeHandler}
      placeholder={placeHolder}
      value={value}
      required={true}
      type={type}
    />
  );
}

export default Input;

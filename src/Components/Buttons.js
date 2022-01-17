import React from "react";
import "./Buttons.css";

const Buttons = ({ title, onClick, cssProps }) => {
  return (
    <button className={cssProps} onClick={() => onClick()}>
      {title}
    </button>
  );
};

export default Buttons;

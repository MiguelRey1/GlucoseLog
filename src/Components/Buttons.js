import React from "react";
import "./Buttons.css";

const Buttons = ({ title, onClick, cssProps, ID }) => {
  return (
    <button id={ID} className={cssProps} onClick={(e) => onClick(e)}>
      {title}
    </button>
  );
};

export default Buttons;

import React from "react";
import "./Inputs.css";

const Inputs = (props) => {
  return (
    <>
      <label htmlFor={props.forName}>{props.titleLabel}</label>
      <input
        className="inputs-texts"
        id={props.forName}
        placeholder={props.PlaceHolder1}
        ref={props.myRef1}
        type="text"
      />
      <input
        className="inputs-texts"
        ref={props.myRef2}
        placeholder={props.PlaceHolder2}
        type="text"
      />
    </>
  );
};

export default Inputs;

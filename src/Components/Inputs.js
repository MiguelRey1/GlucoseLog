import React from 'react';
import './Inputs.css'

const Inputs = (props) => {
    return (
        <div className={props.className}>
            <label htmlFor={props.forName1}>{props.titleLabel1}</label>
            <input className="inputs-texts" id={props.forName1} type="text" />
            <label  htmlFor={props.forName2}>{props.titleLabel2}</label>
            <input className="inputs-texts" id={props.forName2} type="text" />
        </div>
    )
}

export default Inputs

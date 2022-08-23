import React from "react";
import "./Inputs.css";

const Inputs = (props) => {
  return (
    <>
     {/*  <label htmlFor={props.forName}>{props.titleLabel}</label>
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
      /> */}

      <label htmlFor={props.forName1}>Medicamento</label>
      <input 
        id={props.forName1} 
        className="inputs-texts" 
        placeholder={props.placeHolder}
        ref={props.refInputMedicamento}
        type="text"
      />
      <label htmlFor={props.forName2}>Nivel de Glucosa</label>
      <input 
        id={props.forName2} 
        className="inputs-texts" 
        placeholder={props.placeHolder}
        ref={props.refNvlGlucosa}
        type="text"
      />
      <label >Hora de Comida</label>

      {/* onChange={(e)=> props.change(e)} */}
      <select ref={props.refHoraComida} >
        <option value="desayuno">Desayuno</option>
        <option value="almuerzo">Almuerzo</option>
        <option value="cena">Cena</option>
      </select>

      <label >Momento de la toma</label>
      <select ref={props.refHoraToma} >
        <option value="antes">Antes</option>
        <option value="despues">Despues</option>
      </select>

    </>
  );
};

export default Inputs;

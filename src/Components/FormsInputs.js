import React from "react";
import Buttons from "./Buttons";
import Inputs from "./Inputs";

const FormsInputs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
  return (
    <form onSubmit={handleSubmit}>
      <div className="container-inputs">
        <div className="container-inputs__items">
          <label htmlFor="fecha">Fecha</label>
          <input className="inputs-texts" id="fecha" type="text" readOnly/>
          <label htmlFor="hora">Hora</label>
          <input className="inputs-texts" id="hora" type="text" readOnly/>
        </div>
        <Inputs
          className="container-inputs__items"
          forName1="desayuno"
          forName2="almuerzo"
          titleLabel1="Desayuno"
          titleLabel2="Almuerzo"
        />
        <Inputs
          className="container-inputs__items"
          forName1="cena"
          forName2="medicamento"
          titleLabel1="cena"
          titleLabel2="medicamento"
        />
        <div className="container-inputs__items btnAdd-container">
          <Buttons cssProps="Buttons btnAdd" title="Add" />
        </div>
      </div>
    </form>
  );
};

export default FormsInputs;

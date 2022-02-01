import React, { useRef } from "react";
import Buttons from "./Buttons";
import Inputs from "./Inputs";

const FormsInputs = (props) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addData = () => {
    let obj = {
      desayuno: {
        antes: props.object.desayuno.antes = props.myRefs.desayuno.antes.current.value,
        despues: props.object.desayuno.despues = props.myRefs.desayuno.despues.current.value
      },
      almuerzo: {
        antes: props.object.almuerzo.antes = props.myRefs.almuerzo.antes.current.value,
        despues: props.object.almuerzo.despues = props.myRefs.almuerzo.despues.current.value
      },
      cena: {
        antes: props.object.cena.antes = props.myRefs.cena.antes.current.value,
        despues: props.object.cena.despues = props.myRefs.cena.despues.current.value
      },
      medicamento: props.object.medicamento = props.myRefs.medicamento.current.value
    };
    props.myRefs.desayuno.antes.current.value= "";
    props.myRefs.desayuno.despues.current.value= "";
    props.myRefs.almuerzo.antes.current.value= "";
    props.myRefs.almuerzo.despues.current.value= "";
    props.myRefs.cena.antes.current.value= "";
    props.myRefs.cena.despues.current.value= "";
    props.myRefs.medicamento.current.value= "";
    props.handleAdd(obj);
  };

  const edit = (e) => {
  
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-inputs">
        <div className="container-inputs__items">
          <Inputs
            forName="desayuno"
            titleLabel="Desayuno"
            myRef1={props.myRefs.desayuno.antes}
            myRef2={props.myRefs.desayuno.despues}
            PlaceHolder1={"antes"}
            PlaceHolder2={"despues"}
          />
        </div>

        <div className="container-inputs__items">
          <Inputs
            forName="almuerzo"
            titleLabel="Almuerzo"
            myRef1={props.myRefs.almuerzo.antes}
            myRef2={props.myRefs.almuerzo.despues}
            PlaceHolder1={"antes"}
            PlaceHolder2={"despues"}
          />
        </div>

        <div className="container-inputs__items">
          <Inputs
            forName="cena"
            titleLabel="Cena"
            myRef1={props.myRefs.cena.antes}
            myRef2={props.myRefs.cena.despues}
            PlaceHolder1={"antes"}
            PlaceHolder2={"despues"}
          />
        </div>

        <div className="container-inputs__items btnAdd-container">
          <label htmlFor="medicamento">Medicamento</label>
          <input
            className="inputs-texts"
            id="medicamento"
            type="text"
            placeholder="medicamento"
            ref={props.myRefs.medicamento}
          />
          <div>
            <Buttons cssProps="Buttons " title="Add" onClick={addData} />
            <Buttons cssProps="Buttons " title="Modify" onClick={props.handleEdit} />
          </div>
          
        </div>
      </div>
    </form>
  );
};

export default FormsInputs;

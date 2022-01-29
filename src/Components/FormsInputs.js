import React, { useRef } from "react";
import Buttons from "./Buttons";
import Inputs from "./Inputs";

const FormsInputs = (props) => {
  const txtDesayunoAntes = useRef(null);
  const txtDesayunoDespues = useRef(null);
  const txtAlmuerzoAntes = useRef(null);
  const txtAlmuerzoDespues = useRef(null);
  const txtCenaAntes = useRef(null);
  const txtCenaDespues = useRef(null);
  const txtMedicamento = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addData = (e) => {
    let obj = {
      desayuno: {
        antes: (props.object.desayuno.antes = txtDesayunoAntes.current.value),
        despues: (props.object.desayuno.despues =
          txtDesayunoDespues.current.value),
      },
      almuerzo: {
        antes: (props.object.almuerzo.antes = txtAlmuerzoAntes.current.value),
        despues: (props.object.almuerzo.despues =
          txtAlmuerzoDespues.current.value),
      },
      cena: {
        antes: (props.object.cena.antes = txtCenaAntes.current.value),
        despues: (props.object.cena.despues = txtCenaDespues.current.value),
      },
      medicamento: (props.object.medicamento = txtMedicamento.current.value),
    };
    txtDesayunoAntes.current.value = "";
    txtDesayunoDespues.current.value = "";
    txtAlmuerzoAntes.current.value = "";
    txtAlmuerzoDespues.current.value = "";
    txtCenaAntes.current.value = "";
    txtCenaDespues.current.value = "";
    txtMedicamento.current.value = "";
    props.handleAdd(obj);
    // console.log(props.object)
    // console.log(props.object.desayuno.antes = e.target.value)
    // console.log(e)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-inputs">
        <div className="container-inputs__items">
          <Inputs
            forName="desayuno"
            titleLabel="Desayuno"
            myRef1={txtDesayunoAntes}
            myRef2={txtDesayunoDespues}
            PlaceHolder1={"antes"}
            PlaceHolder2={"despues"}
          />
        </div>

        <div className="container-inputs__items">
          <Inputs
            forName="almuerzo"
            titleLabel="Almuerzo"
            myRef1={txtAlmuerzoAntes}
            myRef2={txtAlmuerzoDespues}
            PlaceHolder1={"antes"}
            PlaceHolder2={"despues"}
          />
        </div>

        <div className="container-inputs__items">
          <Inputs
            forName="cena"
            titleLabel="Cena"
            myRef1={txtCenaAntes}
            myRef2={txtCenaDespues}
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
            ref={txtMedicamento}
          />
          <Buttons cssProps="Buttons btnAdd" title="Add" onClick={addData} />
        </div>
      </div>
    </form>
  );
};

export default FormsInputs;

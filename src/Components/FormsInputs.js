import React  from "react";
import Buttons from "./Buttons";
import Inputs from "./Inputs";
import { addData, updateData } from "../Firebase-config/firebaseconfig"

const FormsInputs = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  /* const addData = () => {
    let obj = {
      desayuno: {
        antes: (props.object.desayuno.antes =
          props.myRefs.desayuno.antes.current.value),
        despues: (props.object.desayuno.despues =
          props.myRefs.desayuno.despues.current.value),
      },
      almuerzo: {
        antes: (props.object.almuerzo.antes =
          props.myRefs.almuerzo.antes.current.value),
        despues: (props.object.almuerzo.despues =
          props.myRefs.almuerzo.despues.current.value),
      },
      cena: {
        antes: (props.object.cena.antes =
          props.myRefs.cena.antes.current.value),
        despues: (props.object.cena.despues =
          props.myRefs.cena.despues.current.value),
      },
      medicamento: (props.object.medicamento =
        props.myRefs.medicamento.current.value),
    };
    props.myRefs.desayuno.antes.current.value = "";
    props.myRefs.desayuno.despues.current.value = "";
    props.myRefs.almuerzo.antes.current.value = "";
    props.myRefs.almuerzo.despues.current.value = "";
    props.myRefs.cena.antes.current.value = "";
    props.myRefs.cena.despues.current.value = "";
    props.myRefs.medicamento.current.value = "";
    props.handleAdd(obj);
  }; */

  

  const test = (e)=>{
    let object2 = {
      id: props.data.length + 1,
      fecha: new Date().toLocaleDateString(),
      hora: new Date().toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "numeric",
      }),
      desayuno: {
        antes: null ,
        despues: null
      },
      almuerzo: {
        antes: null,
        despues: null,
      },
      cena: {
        antes: null,
        despues: null,
      },
      medicamento: null,
    };

    let hrComida= props.myRefs.horacomida.current.value;
    let hrToma = props.myRefs.horatoma.current.value;

    object2.medicamento = props.myRefs.inputmedicamento.current.value;
    
    if (hrComida === "desayuno" && hrToma === "antes") {
      object2.desayuno.antes = props.myRefs.nvlglucosa.current.value;
    }  
    
    if (hrComida === "desayuno" && hrToma === "despues") {
      object2.desayuno.despues = props.myRefs.nvlglucosa.current.value;
    }  
    
    if (hrComida === "almuerzo" && hrToma === "antes") {
      object2.almuerzo.antes = props.myRefs.nvlglucosa.current.value;
    }  
    
    if (hrComida === "almuerzo" && hrToma === "despues") {
      object2.almuerzo.despues = props.myRefs.nvlglucosa.current.value;
    }  
    
    if (hrComida === "cena" && hrToma === "antes") {
      object2.cena.antes = props.myRefs.nvlglucosa.current.value;
    } 
    
    if(hrComida === "cena" && hrToma === "despues") {
      object2.cena.despues = props.myRefs.nvlglucosa.current.value;
    }
    props.handleAdd(object2)
    props.myRefs.inputmedicamento.current.value = ""
    props.myRefs.nvlglucosa.current.value = ""
    // addData(object2);
    // console.table(object2)
  }

  const update = () =>{
    let obj = {
      
      desayuno: {
        antes:"",
        despues: ""
      },
      almuerzo: {
        antes: "",
        despues: "",
      },
      cena: {
        antes: "",
        despues: "",
      },
      medicamento: "",
    };

    let hrComida = props.myRefs.horacomida.current.value;
    let hrToma = props.myRefs.horatoma.current.value;

    props.object.medicamento = props.myRefs.inputmedicamento.current.value;
    if (hrComida === "desayuno" && hrToma === "antes") {
      obj.desayuno.antes = (props.object.desayuno.antes = props.myRefs.nvlglucosa.current.value);
    }  
    
    if (hrComida === "desayuno" && hrToma === "despues") {
      obj.desayuno.despues = (props.object.desayuno.despues = props.myRefs.nvlglucosa.current.value);;
    }  
    
    if (hrComida === "almuerzo" && hrToma === "antes") {
      obj.almuerzo.antes =(props.object.almuerzo.antes = props.myRefs.nvlglucosa.current.value);
    }  
    
    if (hrComida === "almuerzo" && hrToma === "despues") {
      obj.almuerzo.despues = (props.object.almuerzo.despues = props.myRefs.nvlglucosa.current.value);
    }  
    
    if (hrComida === "cena" && hrToma === "antes") {
      obj.cena.antes = (props.object.cena.antes = props.myRefs.nvlglucosa.current.value);
    } 
    
    if(hrComida === "cena" && hrToma === "despues") {
      obj.cena.despues = (props.object.cena.despues = props.myRefs.nvlglucosa.current.value);
    }
    /**
     * * este metodo que se pasa como propiedad llama 
     * * al metodo updateData que esta en el contenedor general de la app  
     * */
    
    props.handleUpdateData(obj)
    props.myRefs.inputmedicamento.current.value = ""
    props.myRefs.nvlglucosa.current.value = ""

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-inputs">
        {/* <div className="container-inputs__items">
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
        </div> */}

        <div className="container-inputs__items">
          <Inputs
            forName1="medicamento"
            forName2="nvl-glucosa"
            // myRef1={props.myRefs.cena.antes}
            // myRef2={props.myRefs.cena.despues}
            refInputMedicamento={ props.myRefs.inputmedicamento}
            refNvlGlucosa={props.myRefs.nvlglucosa}
            refHoraComida={props.myRefs.horacomida}
            refHoraToma={props.myRefs.horatoma}
            // change={test}
          />
          <div>
            <Buttons cssProps="Buttons " title="Add" onClick={test} />
            <Buttons
              cssProps="Buttons "
              title="Modify"
              onClick={update}
            />
          </div>
        </div>

          {/* <div className="container-inputs__items btnAdd-container">
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
            <Buttons
              cssProps="Buttons "
              title="Modify"
              onClick={props.handleEdit}
            />
          </div>
        </div> */}
      </div>
    </form>
  );
};

export default FormsInputs;

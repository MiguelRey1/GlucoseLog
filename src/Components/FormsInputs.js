import React  from "react";
import Buttons from "./Buttons";
import Inputs from "./Inputs";


const FormsInputs = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const add = (e)=>{
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
  }

  const update = (e) =>{
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
    
    props.handleUpdateData(e,obj)
    props.myRefs.inputmedicamento.current.value = ""
    props.myRefs.nvlglucosa.current.value = ""

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-inputs">
        <div className="container-inputs__items">
          <Inputs
            forName1="medicamento"
            forName2="nvl-glucosa"
            refInputMedicamento={ props.myRefs.inputmedicamento}
            refNvlGlucosa={props.myRefs.nvlglucosa}
            refHoraComida={props.myRefs.horacomida}
            refHoraToma={props.myRefs.horatoma}
          />
          <div>
            <Buttons cssProps="Buttons " title="Add" onClick={add} />
            
            <Buttons
              cssProps="Buttons "
              title="Modify"
              onClick={update} 
            />
          </div>
        </div>

      </div>
    </form>
  );
};

export default FormsInputs;

import React, { Component, createRef } from "react";
import FormsInputs from "./Components/FormsInputs";
import TableData from "./Components/TableData";
import "./AppContainer.css";
import { db } from "./Firebase-config/firebaseconfig"
import { doc, collection , getDocs, setDoc, deleteDoc} from 'firebase/firestore';



class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.refInputMedicamento = createRef();
    this.refNvlGlucosa = createRef();
    this.refHoraComida = createRef();
    this.refHoraToma = createRef();
    
    this.state = {
      data: [],
      docID:"",
      objID: 0,
      dataChange: {
        id: null,
        fecha: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString(undefined, {
          hour: "numeric",
          minute: "numeric",
        }),
        desayuno: {
          antes: null,
          despues: null,
        },
        almuerzo: {
          antes: null,
          despues: null,
        },
        cena: {
          antes: null,
          despues: null,
        },
        medicamento: "",
      },
      dataUpdate: {
        desayuno: {
          antes: null,
          despues: null,
        },
        almuerzo: {
          antes: null,
          despues: null,
        },
        cena: {
          antes: null,
          despues: null,
        },
        medicamento: "",
      },

      refs:{
        inputmedicamento: this.refInputMedicamento,
        nvlglucosa: this.refNvlGlucosa,
        horacomida: this.refHoraComida,
        horatoma: this.refHoraToma
      },
    };
  }
  async componentDidMount() {
    const docRefs = await getDocs(collection(db, "logs"));
    let lista = docRefs.docs.map((doc)=> doc.data());
  
    this.setState({
      data: [...lista],
    })
    console.log( lista);
   
  }

  async componentDidUpdate(){
    const docRefs = await getDocs(collection(db, "logs"));
    let lista = docRefs.docs.map((doc)=> doc.data());
  
    this.setState({
      data: [...lista],
    })
  
  }

  addData = async (obj) =>{

    let medicine = this.refInputMedicamento.current.value;
    let lvlGlucose = this.refNvlGlucosa.current.value;
    let objId = this.state.objID;

    if(objId !== 0){
      this.setState({
        objID: 0
      })
    }

    if (medicine !== ""  && lvlGlucose !== ""  && objId === 0){
      console.log("All it's working well !!!");
      const newLogRef = doc(collection(db, "logs"))
      await setDoc(newLogRef, obj)
    } else {
      console.log("Ooops!!!, something was wrong");
    }

  }

  /**
  ** Este Metodo llamado "getID" sirve para llamar o obtener el id generado automaticamente del documento
  ** en la base de datos de FireStore para luego al llamar el metodo "updateData" de esta clase y asi
  ** poder actualizar el documento en Firestore.
  */ 
  getID = async (id) =>{
    const docRefs = await getDocs(collection(db, "logs"));
    docRefs.forEach((doc)=>{
      if(doc.data().id === id){
        this.setState({
          docID: doc.id
        })
      }
    })

  }

  Edit = (e) => {
  /**
  ** Los siguiente metodos compara el id Del elemento seleccionado con el id 
  ** de unos de los elementos del arreglo de objetos "data" para asi llenar
  ** los campos del form para poder ser editados.
  */ 
    let id = Number.parseInt(e.target.id);
    this.state.data.forEach((element) => {
      if (element.id === id) {
        this.setState({
          objID: element.id,
          dataUpdate: {
            id: element.id,
            fecha: element.fecha,
            hora: element.hora,
            desayuno: {
              antes: element.desayuno.antes,
              despues: element.desayuno.despues,
            },
            almuerzo: {
              antes: element.almuerzo.antes,
              despues: element.almuerzo.despues,
            },
            cena: {
              antes: element.cena.antes,
              despues: element.cena.despues,
            },
            medicamento: element.medicamento,
          },
        });
        this.refInputMedicamento.current.value = element.medicamento;
        if(element.desayuno.antes !== null || element.desayuno.antes === ""){
          this.refNvlGlucosa.current.value = element.desayuno.antes;
        }
        if(element.desayuno.despues !== null || element.desayuno.despues === ""){
          this.refNvlGlucosa.current.value = element.desayuno.despues;
        }
        if(element.almuerzo.antes !== null || element.almuerzo.antes === ""){
          this.refNvlGlucosa.current.value = element.almuerzo.antes;
        }
        if(element.almuerzo.despues !== null || element.almuerzo.despues === ""){
          this.refNvlGlucosa.current.value = element.almuerzo.despues;
        }
        if(element.cena.antes !== null || element.cena.antes === ""){
          this.refNvlGlucosa.current.value = element.cena.antes;
        }
        if(element.cena.despues !== null || element.cena.despues === ""){
          this.refNvlGlucosa.current.value = element.cena.despues;
        }
      }
    });
    this.getID(id);

  };

  updateData = async (e,obj) => {
    
   
      this.setState({
        objID: 0,
        dataUpdate: {
          desayuno: {
            antes: obj.desayuno.antes,
            despues: obj.desayuno.despues,
          },
          almuerzo: {
            antes: obj.almuerzo.antes,
            despues: obj.almuerzo.despues,
          },
          cena: {
            antes: obj.cena.antes,
            despues: obj.cena.despues,
          },
          medicamento: obj.medicamento,
        },
      })

      let medicine = this.refInputMedicamento.current.value;
      let lvlGlucose = this.refNvlGlucosa.current.value;

      if (this.state.objID !== 0 && medicine !== "" && lvlGlucose !== ""){
        const docUpdateRef = doc(db, "logs", this.state.docID);
        setDoc(docUpdateRef, this.state.dataUpdate, {merge: true});
        console.log("it's working");
      } 

  };

  handleDelete = async (e) => {
    
    
    let id = Number.parseInt(e.target.id);
    await this.getID(id);
    await deleteDoc(doc(db, "logs", this.state.docID))
    
  };


  render() {
    return (
      <div className="container">
        <h1 className="container-title">Glucose Log</h1>
        <section className="container-2">
          <FormsInputs
            object={this.state.dataUpdate}
            myRefs={this.state.refs}
            ID={this.state.objID}
            data={this.state.data}
            handleUpdateData={this.updateData}
            handleAdd={this.addData}
          />
        </section>
        <section className="container-table">
          <TableData
            onHandleDelete={this.handleDelete}
            onHandleEdit={this.Edit}
            dataLog={this.state.data}
          />
        </section>
      </div>
    );
  }
}

export default AppContainer;

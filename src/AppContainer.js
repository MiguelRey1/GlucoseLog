import React, { Component, createRef } from "react";
import FormsInputs from "./Components/FormsInputs";
import TableData from "./Components/TableData";
import "./AppContainer.css";
import { db } from "./Firebase-config/firebaseconfig"
import { doc, collection , getDocs, setDoc, deleteDoc} from 'firebase/firestore';

  const LogBook = [
  {
    id: 1,
    fecha: "09/01/22",
    hora: "9:09",
    desayuno: {
      antes: 126,
      despues: 180,
    },
    almuerzo: {
      antes: 180,
      despues: 250,
    },
    cena: {
      antes: 100,
      despues: 200,
    },
    medicamento: "insulina Levemir",
  },
  {
    id: 2,
    fecha: "10/01/22",
    hora: "11:15",
    desayuno: {
      antes: 126,
      despues: 180,
    },
    almuerzo: {
      antes: 180,
      despues: 250,
    },
    cena: {
      antes: 100,
      despues: 200,
    },
    medicamento: "insulina Levemir",
  },
  ];

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

     /*  refs: {
        desayuno: {
          antes: this.txtDesayunoAntes,
          despues: this.txtDesayunoDespues,
        },
        almuerzo: {
          antes: this.txtAlmuerzoAntes,
          despues: this.txtAlmuerzoDespues,
        },
        cena: {
          antes: this.txtCenaAntes,
          despues: this.txtCenaDespues,
        },
        medicamento: this.txtMedicamento,
      }, */

      refs:{
        inputmedicamento: this.refInputMedicamento,
        nvlglucosa: this.refNvlGlucosa,
        horacomida: this.refHoraComida,
        horatoma: this.refHoraToma
      },
      objID: null,
    };
  }
  async componentDidMount() {
    const docRefs = await getDocs(collection(db, "logs"));
    let lista = docRefs.docs.map((doc)=> doc.data());
    // let docIDs = docRefs.docs.map((doc)=> doc.id);
    this.setState({
      data: [...lista],
    })
    console.log( lista);
    /* docRefs.forEach((doc)=>{
      console.log(doc.data().medicamento)
    }) */
  }

  async componentDidUpdate(){
    const docRefs = await getDocs(collection(db, "logs"));
    let lista = docRefs.docs.map((doc)=> doc.data());
  
    this.setState({
      data: [...lista],
    })
  
  }

  getData = async () =>{

  }

  addData = async (obj) =>{
    const newLogRef = doc(collection(db, "logs"))
    await setDoc(newLogRef, obj)
  }

  handleAdd = (obj) => {
    /* this.setState({
      dataChange: {
        id: this.state.dataChange.id + 1,
        fecha: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString(undefined, {
          hour: "numeric",
          minute: "numeric",
        }),
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
    });
    this.state.data.push(this.state.dataChange); */
    console.log(this.state.data)
  };

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
    // console.log(this.state.docID)
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

  updateData = async (obj) => {
    
    this.setState({
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

    const docUpdateRef = doc(db, "logs", this.state.docID);
    setDoc(docUpdateRef, this.state.dataUpdate, {merge: true});


   /*  let lista = this.state.data.map((element) => {
      if (element.id === this.state.objID) {
        element.desayuno.antes = this.txtDesayunoAntes.current.value;
        element.desayuno.despues = this.txtDesayunoDespues.current.value;
        element.almuerzo.antes = this.txtAlmuerzoAntes.current.value;
        element.almuerzo.despues = this.txtAlmuerzoDespues.current.value;
        element.cena.antes = this.txtCenaAntes.current.value;
        element.cena.despues = this.txtCenaDespues.current.value;
        element.medicamento = this.txtMedicamento.current.value;
      }
      return element;
    });
    console.log(...lista);
    this.setState({
      data: [...lista],
    });
    this.txtDesayunoAntes.current.value = "";
    this.txtDesayunoDespues.current.value = "";
    this.txtAlmuerzoAntes.current.value = "";
    this.txtAlmuerzoDespues.current.value = "";
    this.txtCenaAntes.current.value = "";
    this.txtCenaDespues.current.value = "";
    this.txtMedicamento.current.value = ""; */
  };

  handleDelete = async (e) => {
    
    
    let id = Number.parseInt(e.target.id);
    await this.getID(id);
    await deleteDoc(doc(db, "logs", this.state.docID))
    // console.log(id)
    // console.log(this.getID())
    
    /* this.state.data.forEach((element) => {
      if (element.id === id) {
        return this.state.data.splice(this.state.data.indexOf(element), 1);
      }
    }); */
   
   /*  this.setState({
      data: this.state.data,
    }); */
  };


  render() {
    return (
      <div className="container">
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

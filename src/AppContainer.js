import React, { Component } from "react";
import FormsInputs from "./Components/FormsInputs";
import TableData from "./Components/TableData";
import './AppContainer.css';

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
    this.state = {
      data: [...LogBook] ,
      dataChange:{
      id: LogBook.length+1,
      fecha: new Date().toLocaleDateString() ,
      hora: new Date().toLocaleTimeString(undefined,{hour:'numeric', minute:'numeric'}),
      desayuno: {
        antes: null,
        despues: null
      },
      almuerzo: {
        antes: null,
        despues: null
      },
      cena: {
        antes: null,
        despues: null
      },
      medicamento: ''
    }
    };
    
  }
  componentDidMount() {
    // for (const el in LogBook) {
    //     console.log(LogBook[el].desayuno.antes)
    // }
  }

  add =(obj)=>{
    /* this.setState({
      data: [...obj]
    }) */
    /* this.setState({
      dataChange:{
        id: LogBook.length+1,
        fecha: "09/01/22",
        hora: "9:09",
        desayuno: {
          antes: obj.desayuno.antes,
          despues: obj.desayuno.despues
        },
        almuerzo: {
          antes: obj.almuerzo.antes,
          despues: obj.almuerzo.despues
        },
        cena: {
          antes: obj.cena.antes,
          despues: obj.cena.despues
        },
        medicamento: 'Levemir'
        
      }
    })
    LogBook.push(this.state.dataChange) */

  }

  handleAdd = (obj) =>{
  this.setState({
    dataChange:{
      id: this.state.dataChange.id+1,
      fecha: new Date().toLocaleDateString() ,
      hora: new Date().toLocaleTimeString(undefined,{hour:'numeric', minute:'numeric'}),
      desayuno: {
        antes: obj.desayuno.antes,
        despues: obj.desayuno.despues
      },
      almuerzo: {
        antes: obj.almuerzo.antes,
        despues: obj.almuerzo.despues
      },
      cena: {
        antes: obj.cena.antes,
        despues: obj.cena.despues
      },
      medicamento: obj.medicamento
    },
  })
    
    this.state.data.push(this.state.dataChange)
    // console.log("adding ...")
  }

  handleEdit=(e)=> {
    console.log("this is handle Modifier Button")
    // console.log(this.state.data)
    console.log(e.target)
    console.log(e.target.id)
    
    
  }

  handleDelete = (e) => {
    // console.log("this is handle Delete Button")
    // console.log(e)
      let id = Number.parseInt(e.target.id);
      this.state.data.forEach((element) => {
        if(element.id === id){
          return  this.state.data.splice(this.state.data.indexOf(element),1)
        }
      });
      
      this.setState({
        data: this.state.data
      })

    console.log(this.state.data)
  }


  render() {
    return (
      <div className="container">
        <section className="container-2">
          <FormsInputs object={this.state.dataChange} handleAdd={this.handleAdd}/>
        </section>
        <section className="container-table">
          <TableData onHandleDelete={this.handleDelete} onHandleEdit={this.handleEdit} dataLog={this.state.data} />
        </section>
      </div>
    );
  }
}

export default AppContainer;

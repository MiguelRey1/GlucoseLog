import React, { Component, createRef } from "react";
import FormsInputs from "./Components/FormsInputs";
import TableData from "./Components/TableData";
import "./AppContainer.css";

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
    this.txtDesayunoAntes = createRef();
    this.txtDesayunoDespues = createRef();
    this.txtAlmuerzoAntes = createRef();
    this.txtAlmuerzoDespues = createRef();
    this.txtCenaAntes = createRef();
    this.txtCenaDespues = createRef();
    this.txtMedicamento = createRef();

    this.state = {
      data: [...LogBook],
      dataChange: {
        id: LogBook.length + 1,
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

      refs: {
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
      },
      objID: null,
    };
  }
  componentDidMount() {}

  handleAdd = (obj) => {
    this.setState({
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
    this.state.data.push(this.state.dataChange);
  };

  Edit = (e) => {
    let id = Number.parseInt(e.target.id);
    this.state.data.forEach((element) => {
      if (element.id === id) {
        this.setState({
          objID: element.id,
        });
        this.txtDesayunoAntes.current.value = element.desayuno.antes;
        this.txtDesayunoDespues.current.value = element.desayuno.despues;
        this.txtAlmuerzoAntes.current.value = element.almuerzo.antes;
        this.txtAlmuerzoDespues.current.value = element.almuerzo.despues;
        this.txtCenaAntes.current.value = element.cena.antes;
        this.txtCenaDespues.current.value = element.cena.despues;
        this.txtMedicamento.current.value = element.medicamento;
      }
    });
  };

  handleEdit = (e) => {
    let lista = this.state.data.map((element) => {
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
    this.txtMedicamento.current.value = "";
  };

  handleDelete = (e) => {
    let id = Number.parseInt(e.target.id);
    this.state.data.forEach((element) => {
      if (element.id === id) {
        return this.state.data.splice(this.state.data.indexOf(element), 1);
      }
    });

    this.setState({
      data: this.state.data,
    });
  };


  render() {
    return (
      <div className="container">
        <section className="container-2">
          <FormsInputs
            object={this.state.dataChange}
            myRefs={this.state.refs}
            ID={this.state.objID}
            data={this.state.data}
            handleEdit={this.handleEdit}
            handleAdd={this.handleAdd}
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

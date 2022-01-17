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
  {
    id: 3,
    fecha: "11/01/22",
    hora: "01:16",
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
    this.state = {};
  }
  componentDidMount() {
    // for (const el in LogBook) {
    //     console.log(LogBook[el].desayuno.antes)
    // }
  }

  handleModifiers() {
    console.log("this is handle Modifier Button")
  }

  handleDelete(){
    console.log("this is handle Delete Button")
  }

  render() {
    return (
      <div className="container">
        <section className="container-2">
          <FormsInputs/>
        </section>
        <section className="container-table">
          <TableData onHandleDelete={this.handleDelete} onHandleModifier={this.handleModifiers} dataLog={LogBook} />
        </section>
      </div>
    );
  }
}

export default AppContainer;

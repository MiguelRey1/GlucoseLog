import React from "react";
import Buttons from "./Buttons";

const TableRows = (props) => {
  return (
    <>
      {props.dataLog.map((el) => (
        <tr key={el.id}>
          <td>{el.fecha}</td>
          <td>{el.hora}</td>
          <td>{el.desayuno.antes}</td>
          <td>{el.desayuno.despues}</td>
          <td>{el.almuerzo.antes}</td>
          <td>{el.almuerzo.despues}</td>
          <td>{el.cena.antes}</td>
          <td>{el.cena.despues}</td>
          <td>{el.medicamento}</td>
          <td>
            <Buttons
              cssProps="Buttons"
              ID={el.id}
              onClick={props.onHandleEdit}
              title="Edit"
            />
            <Buttons
              cssProps="Buttons"
              ID={el.id}
              onClick={props.onHandleDelete}
              title="Delete"
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableRows;

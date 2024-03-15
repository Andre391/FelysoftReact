import React, { useState } from "react";
import Menu from "../../componentes/Menu";

export default function ListPersona() {
  
  const initPeople = [
    {
      id: 1,
      name: "Yully",
      lastname: "Soto",
    },
    {
      id: 2,
      name: "Yasury",
      lastname: "Yamile"
    },
    {
      id: 3,
      name: "Criss",
      lastname: "Diaz",
    },
  ];
  const [people, serPeople] = useState(initPeople);
  return (
    <>
      <div>
        <Menu />
      </div>
      <div>ListPersona</div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>APELLIDO</th>
            </tr>
          </thead>
          <tbody>
            {people.length > 0 ? (
              people.map((el) => (
                <>
                <tr>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.lastname}</td>
                  </tr>
                </>
              ))
            ) : (
              <tr>
                <td>No hay Datos</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

import React, { useState } from "react";
import Menu from "../../componentes/Menu";

export default function FormVentas() {

  const [valor, setValor] = useState(0);
  const contar = () => {
    setValor(valor + 1);
  };
  return (
    <>
      <div>
        <Menu />
      </div>
      <div>FormVentas</div>
      <div>
        <button onClick={contar}>Contar </button>{valor}
      </div>
    </>
  );
}

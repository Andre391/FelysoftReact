import Saludo from "./Saludo";
import logo from "../logo.svg";
import React from "react";

export const Header= () => {
  return (
    <>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Saludo />
    </header>
    </>
  );
}

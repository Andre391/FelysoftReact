import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa BrowserRouter y asígnales alias
import "./App.css";
import ListPersona from "./page/personas/ListPersona";
import FormVentas from "./page/ventas/FormVentas";
import { Header } from "./componentes/Header";

function App() {
  return (
    <Router> {}
      <>
        <div>
          <Header />
        </div>
        <div className="App">
          <Routes>
            <Route path="/" element={<ListPersona />} />
            <Route path="Ventas" element={<FormVentas />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;


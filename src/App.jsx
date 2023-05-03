import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
function App() {
  const [pacientes, setPacientes] = useState([]);
  return (
    <div className="container mx-auto mt-20 p-10">
      <Header numeros={1} />
      <div className="md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} />
        <ListadoPacientes pacientes={pacientes} />
      </div>
    </div>
  );
}

export default App;

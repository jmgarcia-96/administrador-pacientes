import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
function App() {
  const INITIAL = JSON.parse(localStorage.getItem("pacientes")) ?? [];
  const [pacientes, setPacientes] = useState(INITIAL);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const nuevosPacientes = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(nuevosPacientes);
  };
  return (
    <div className="container mx-auto mt-20 p-10">
      <Header numeros={1} />
      <div className="md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;

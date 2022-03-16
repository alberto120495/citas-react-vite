function Paciente({
  id,
  nombre,
  propietario,
  email,
  sintomas,
  fecha,
  setPaciente,
  eliminarPaciente,
}) {
  const pacienteTemp = {
    nombre,
    propietario,
    email,
    sintomas,
    fecha,
    id,
  };

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente ?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-md mx-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>{" "}
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>{" "}
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>{" "}
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: <span className="font-normal normal-case">{fecha}</span>{" "}
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case">{sintomas}</span>{" "}
      </p>

      <div className="mt-5 flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between  ">
        <button
          onClick={() => {
            setPaciente(pacienteTemp);
          }}
          type="button"
          className="p-5 bg-indigo-600 hover:bg-indigo-500 transition-all text-white rounded-md uppercase font-bold"
        >
          Editar
        </button>
        <button
          type="button"
          className="p-5 bg-red-600 hover:bg-red-500 transition-all text-white rounded-md uppercase font-bold"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Paciente;

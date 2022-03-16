import Paciente from "./Paciente";

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-10 ">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>{" "}
          </p>

          {pacientes.map(
            ({ nombre, propietario, email, fecha, sintomas, id }) => (
              <Paciente
                key={id}
                id={id}
                nombre={nombre}
                propietario={propietario}
                email={email}
                sintomas={sintomas}
                fecha={fecha}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            )
          )}
        </>
      ) : (
        <>
          <h2 className="font-black text-xl text-center">
            No hay Pacientes registrados
          </h2>
          <p className="text-lg mt-5 text-center mb-10 ">
            Comienza agregando pacientes y{" "}
            <span className="text-indigo-600 font-bold">
              aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;

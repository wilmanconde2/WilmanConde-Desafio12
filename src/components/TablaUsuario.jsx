import TablaFilaUsuario from "./TablaFilaUsuario";

const TablaUsuario = ({ users, eliminarUsuario, setEditarUsuario }) => {
  return (
    <div className="container border border-warning rounded-4 mt-3 text-center">
      <h4 className="text-center m-3">Tabla Usuarios</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Color Favorito</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <TablaFilaUsuario
              key={idx}
              user={user}
              eliminarUsuario={eliminarUsuario}
              setEditarUsuario={setEditarUsuario}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaUsuario;

import Swal from "sweetalert2";

const TablaFilaUsuario = ({ user, eliminarUsuario, setEditarUsuario }) => {
  const handleVer = function (event) {};

  const handleEditar = function (user) {
    setEditarUsuario(user);
  };

  const handleEliminar = function () {
    Swal.fire({
      title: `Estas seguro de eliminar el usuario ${user.nombre} ${user.apellido}?`,
      text: "No se podrá revertir la decisión!!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#aaa",
      confirmButtonText: `Si, borrar el usuario ${user.nombre} ${user.apellido} !`,
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarUsuario(user.id);
        Swal.fire({
          title: "Hecho!",
          text: "El usuario ha sido eliminado",
          icon: "success",
        });
      }
    });
  };
  return (
    <tr>
      <td>{user.nombre}</td>
      <td>{user.apellido}</td>
      <td>{user.edad}</td>
      <td>{user.colorFavorito}</td>
      <td>
        <button className="btn btn-primary me-2" onClick={handleVer}>
          Ver
        </button>
        <button
          className="btn btn-warning me-2"
          onClick={() => handleEditar(user)}>
          Editar
        </button>
        <button className="btn btn-danger" onClick={handleEliminar}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default TablaFilaUsuario;

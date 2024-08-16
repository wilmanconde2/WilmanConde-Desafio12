import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
import Formulario from "./components/Formulario";
import TablaUsuario from "./components/TablaUsuario";
import usuarios from "./constants/usuarios";

const InicioApp = () => {
  const [users, setUsers] = useState(usuarios);

  const [editarUsuario, setEditarUsuario] = useState(null);

  const usuarioEditado = (userEditado) => {
    const usuarioActualizado = users.map((user) =>
      user.id === userEditado.id ? userEditado : user
    );

    setUsers(usuarioActualizado);
    setEditarUsuario(null);
  };

  const agregarUsuario = (usuario) => {
    usuario.id = uuidv4();
    setUsers([...users, usuario]);
  };

  const eliminarUsuario = (id) => {
    const usuariosSinElEliminado = users.filter((user) => user.id !== id);
    setUsers(usuariosSinElEliminado);
  };

  return (
    <div className="container">
      <h1 className="mt-3 text-center">Desafió 12</h1>
      <h3 className="text-center m-3 mb-5">Formulario usuarios con REACT</h3>
      <Formulario
        agregarUsuario={agregarUsuario}
        editarUsuario={editarUsuario}
        setEditarUsuario={setEditarUsuario}
        usuarioEditado={usuarioEditado}
      />
      <TablaUsuario
        users={users}
        eliminarUsuario={eliminarUsuario}
        setEditarUsuario={setEditarUsuario}
      />
      <hr className="m-5" />
    </div>
  );
};

export default InicioApp;

import { useEffect, useState } from "react";

const Formulario = ({
  agregarUsuario,
  editarUsuario,
  setEditarUsuario,
  usuarioEditado,
}) => {
  const formInicial = {
    id: null,
    nombre: "",
    apellido: "",
    edad: "",
    colorFavorito: "",
  };

  useEffect(() => {
    editarUsuario ? setForm(editarUsuario) : setForm(formInicial);
  }, [editarUsuario]);

  const [form, setForm] = useState(formInicial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id === null) {
      agregarUsuario(form);
    } else {
      usuarioEditado(form);
    }
    handleReset();
  };

  const handleReset = () => {
    setForm(formInicial);
    setEditarUsuario(null);
  };

  const handleGuardar = () => {};

  return (
    <form
      className="border border-primary rounded-4 p-4"
      onSubmit={handleSubmit}>
      <h4 className="text-center mb-4">{editarUsuario ? 'Editar' : 'Crear'} Usuario</h4>
      <div className="row">
        <div className="col text-center">
          <label htmlFor="lbl-nombre" className="form-lbl ">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="lbl-nombre"
            name="nombre"
            placeholder="Ingrese nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="col text-center">
          <label htmlFor="lbl-apellido" className="form-lbl ">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="lbl-apellido"
            name="apellido"
            placeholder="Ingrese apellido"
            value={form.apellido}
            onChange={handleChange}
          />
        </div>
        <div className="col text-center">
          <label htmlFor="lbl-edad" className="form-lbl ">
            Edad
          </label>
          <input
            type="text"
            className="form-control"
            id="lbl-edad"
            name="edad"
            placeholder="Ingrese edad"
            value={form.edad}
            onChange={handleChange}
          />
        </div>
        <div className="col text-center">
          <label htmlFor="lbl-colorFavorito" className="form-lbl ">
            Color Favorito
          </label>
          <input
            type="text"
            className="form-control"
            id="lbl-colorFavorito"
            name="colorFavorito"
            placeholder="Ingrese color favorito"
            value={form.colorFavorito}
            onChange={handleChange}
          />
        </div>

        <div className="container m-3 text-center">
          <button
            className="me-2 btn btn-primary"
            type="submit"
            onClick={handleGuardar}>
            {editarUsuario ? 'Editar' : 'Crear'}
          </button>
          <button
            className="me-2 btn btn-secondary ml-2"
            type="reset"
            onClick={handleReset}>
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Formulario;

import { Fragment, useState } from "react";

const Formulario = ({ guardarLocacion, guardarConsultar }) => {
  //State del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [error, guardarError] = useState(false);
  const [message, guardarMessage] = useState("");
  const { ciudad, pais } = busqueda;
  // Función que coloca los elementos en el state
  const handleChange = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };
  // Cuando el usuario da submit al form
  const handleSubmit = (e) => {
    e.preventDefault();

    //validar
    if (ciudad.trim() === "" || pais.trim() === "") {
      guardarError(true);
      guardarMessage("Debe escribir una ciudad y un pais");
      return;
    }
    //pasar al componente principal
    guardarError(false);
    guardarLocacion(busqueda);
    guardarConsultar(true);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="input-field col s12">
          <input
            onChange={handleChange}
            type="text"
            name="ciudad"
            id="ciudad"
            value={ciudad}
          />
          <label htmlFor="ciudad">Ciudad: </label>
        </div>
        <div className="input-field col s12">
          <select onChange={handleChange} name="pais" id="pais" value={pais}>
            <option value="">--- Seleccione un país ---</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="VE">Venezuela</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
          <label htmlFor="pais"> País </label>
        </div>
        {error ? <p className="red darken-4 error"> {message} </p> : null}
        <div className="input-field col s12">
          <button
            type="submit"
            value="Buscar Clima"
            className="col s12 waves-effect waves-light btn-large btn-block yellow accent-4"
          > Buscar clima </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Formulario;

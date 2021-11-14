import { traducirClima, traducirDescripcion } from "./../helpers/helper";

const Resultado = ({ resultado }) => {
  //Previene la renderización si aun no hay un resultado
  if (!resultado) return null;
  if (resultado.cod === "404") return <p> Ciudad no encontrada </p>;
  //Grados Kelvin
  const kelvin = 273.15;

  const { name, main, weather } = resultado;
  let clima = weather[0].main;
  let descripcion = weather[0].description;

  // Traducir clima al español a traves de un helper
  clima = traducirClima(clima);
  descripcion = traducirDescripcion(descripcion);
  
  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima de {name} </h2>
        <p className="temperatura"> {clima} </p>
        <p> {descripcion} </p>
        <p className="temperatura">
          {parseFloat(main.temp - kelvin, 10).toFixed(2)}{" "}
          <span> &#x2103; </span>
        </p>
        <p>
          Temperatura Máxima {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}{" "}
          <span> &#x2103; </span>
        </p>
        <p>
          Temperatura Mínima {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}{" "}
          <span> &#x2103; </span>
        </p>
      </div>
    </div>
  );
};

export default Resultado;

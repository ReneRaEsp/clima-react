import { Fragment, useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Formulario from "./components/Formulario.jsx";
import Resultado from "./components/Resultado.jsx";
function App() {
  const [locacion, guardarLocacion] = useState({
    ciudad: "Caracas",
    pais: "VE",
  });
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState(false);

  const { ciudad, pais } = locacion;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar === true) {
        console.log("Llamando api");

        const appId = "91a20896832491da0d512d02792e9d21";
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        console.log(url);

        const resp = await fetch(url);
        const result = await resp.json();

        guardarResultado(result);
        guardarConsultar(false);
      }
    };

    consultarAPI();
  }, [ciudad, pais, consultar, resultado]);

  return (
    <Fragment>
      <Header titulo="Clima React app" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                guardarLocacion={guardarLocacion}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              <Resultado resultado={resultado} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

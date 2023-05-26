import "../styles/infoWeather.css";
import { months } from "../tools/months";
const InfoWeather = ({ clima, icono }) => {
  const currentDate = new Date();

  return (
    <div className="info-container">
      <h1 className="h1">{clima.name ? clima.name : "Cargando..."}</h1>
      <img
        className="img"
        src={
          clima.weather ? `${icono}${clima.weather[0].icon}.png` : "Cargando..."
        }
        alt="icono"
      />
      <p className="current-weather">
        {clima.weather ? clima.weather[0].description : "Cargando..."}{" "}
      </p>
      <div className="text-container">
        <p className="text">
          Temperatura:{" "}<br />
          {clima.main ? `${Math.round(clima.main.temp)}°` : "Cargando..."}
        </p>
        <p className="text">
          Maxima:{" "}<br />
          {clima.main ? `${Math.round(clima.main.temp_max)}°` : "Cargando..."}
        </p>
        <p className="text">
          Minima:{" "} <br />
          {clima.main ? `${Math.round(clima.main.temp_min)}°` : "Cargando..."}
        </p>
        <p className="text">
          Fecha:<br /> {currentDate.getDate().toString()} de{" "}
          {months[currentDate.getMonth()]}
        </p>
        <p className="text">
          Humedad: <br />{clima.main ? `${clima.main.humidity}%` : "Cargando..."}{" "}
        </p>
        <p className="text">
          Visibilidad:<br /> {clima.visibility ? `${clima.visibility/1000}km`: "Cargando..."}{" "}
        </p>
        <p className="text">Viento: <br />{clima.wind ? `${clima.wind.speed}km/h` : "Cargando..."} </p>
      </div>
    </div>
  );
};

export default InfoWeather;

import { useState, useEffect } from "react";
import { request, forecastRequest, requestCity } from "../tools/fetch";
import InfoWeather from "./InfoWeather";
import ForeCastCard from "./ForeCastCard";
import { options, error } from "../tools/fetch";
import "../styles/searchForm.css";

const SearchForm = () => {
  const [name, setName] = useState("");
  const [clima, setClima] = useState({});
  const [fore, setFore] = useState([]);

  const iconUrl = "https://openweathermap.org/img/wn/";

  const position = async (pos) => {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const promise = await request(latitude, longitude);
    setClima(promise);
    const forecast = await forecastRequest(latitude, longitude);
    setFore(forecast.list);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position, error, options);
    } else {
      console.error("Error en la geolocalizacion.");
    }
  }, []);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name == "") {
        alert("Introduzca una ciudad.");
        return;
      }

      const newCity = await requestCity(name);
      const forecast = await forecastRequest(
        newCity.coord.lat,
        newCity.coord.lon
      );
      setClima(newCity);
      setFore(forecast.list);
      setName("");
    } catch (error) {
      console.log("Error en la busqueda:", error);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          onChange={handleChange}
          value={name}
          type="text"
          placeholder="Nombre de la ciudad..."
        />
        <button className="btn-submit" type="submit">
          Buscar
        </button>
      </form>
      <div className="weather-container">
        <InfoWeather clima={clima} icono={iconUrl} />
        <div className="cards-container">
          <ForeCastCard foreCast={fore} icono={iconUrl} />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;

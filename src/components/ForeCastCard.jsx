import { months } from "../tools/months";
import "../styles/foreCastCard.css";

const ForeCastCard = ({ foreCast, icono }) => {
  return foreCast
    .filter((cast) => {
      const todayDate = new Date();
      const newDate = new Date(cast.dt_txt);

      return (
        todayDate.getDay() != newDate.getDay() && newDate.getHours() == "12"
      );
    })
    .map((card, index) => {
      return (
        <div className="card-container" key={index}>
          <p className="day">
            {new Date(card.dt_txt).getDate().toString()} de{" "}
            {months[new Date().getMonth()]}
          </p>
          <div className="auxiliar">
            <img src={`${icono}${card.weather[0].icon}.png`} alt="" />
            <p className="temp">{Math.round(card.main.temp_max)}°</p>
            <p className="temp">{Math.round(card.main.temp_min)}°</p>
          </div>
        </div>
      );
    });
};

export default ForeCastCard;

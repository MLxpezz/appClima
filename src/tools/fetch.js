export async function request(lat, long) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=64cd917c76428239bd793e7c69674f03&units=metric&lang=es`
  );
  return data.json();
}

export async function requestCity(cityName, state) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${state}&appid=64cd917c76428239bd793e7c69674f03&units=metric&lang=es`
  );
  return data.json();
}

export async function forecastRequest(lat, long) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=64cd917c76428239bd793e7c69674f03&units=metric&lang=es`
  );

  return data.json();
}

export const options = {
  enableHighAccuracy: true,
  timeout: 4000,
  maximumAge: 0,
};

export const error = (err) => {
  console.error("Error obteniendo la ubicacion", err);
};

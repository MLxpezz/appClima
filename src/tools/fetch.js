export async function request(lat, long) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=64cd917c76428239bd793e7c69674f03&units=metric&lang=es`
  );
  return data.json();
}


export async function requestName(cityName, state) {
    const data = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${state}&limit=10&appid=64cd917c76428239bd793e7c69674f03`);

    return data.json();
}

export async function forecastRequest(lat, long) {
  const data = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=64cd917c76428239bd793e7c69674f03&units=metric&lang=es`);

  return data.json();
}
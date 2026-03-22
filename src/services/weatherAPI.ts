const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export const fetchWeatherByCity = async (city: string) => {
  const geo = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  )
  const geoData = await geo.json()
  if (geoData.cod !== 200) throw new Error("City not found")

  return geoData
}

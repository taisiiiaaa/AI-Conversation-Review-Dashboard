const API_KEY = "3bd2c12d4e40a327119ec0351357d5b1"

export const fetchWeatherByCity = async (city: string) => {
  const geo = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  )
  const geoData = await geo.json()
  if (geoData.cod !== 200) throw new Error("City not found")

  return geoData
}

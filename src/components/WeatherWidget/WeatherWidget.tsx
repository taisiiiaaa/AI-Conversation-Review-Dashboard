import "./WeatherWidget.scss"
import { useWeather } from "../../hooks/useWeather"
import { Skeleton } from "antd"

type Props = { city: string }

export default function WeatherWidget({ city }: Props) {
  const { data, loading, error } = useWeather(city)

  return (
    <aside className="weather-widget">
      {loading ? (
        <div className="weather-skeleton">
          <Skeleton
            active
            title={{ width: 250 }}
            paragraph={{ rows: 1, width: "70%" }}
          />
        </div>
      ) : (
        <>
          <div className="weather-content">
            <h3>Weather Widget</h3>

            {error && <p className="error">{error}</p>}

            {data && (
              <p className="info">
                {data.name}, {Math.round(data.main.temp)}°C,{" "}
                {data.weather[0].description}
              </p>
            )}
          </div>

          {data && (
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="weather icon"
              width={56}
              height={56}
            />
          )}
        </>
      )}
    </aside>
  )
}

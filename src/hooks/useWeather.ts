import { useEffect, useState } from "react";
import { fetchWeatherByCity } from "../services/weatherAPI";

export const useWeather = (city: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city) return;

    setLoading(true);
    setError(null);

    fetchWeatherByCity(city)
      .then(setData)
      .catch(() => setError("Failed to fetch weather"))
      .finally(() => setLoading(false));
  }, [city]);

  return { data, loading, error };
};

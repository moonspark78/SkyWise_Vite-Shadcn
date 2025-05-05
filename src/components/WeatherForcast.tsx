import type { ForecastData } from "@/api/types";


interface WeatherForcastProps {
  data: ForecastData;
}

const WeatherForcast = ({data}: WeatherForcastProps) => {
  return (
    <div>WeatherForcast</div>
  )
}

export default WeatherForcast
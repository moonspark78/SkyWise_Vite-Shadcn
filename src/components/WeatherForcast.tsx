import { ForecastData } from "@/api/types";


interface HourlyTemperatureProps {
  data: ForecastData;
}

const WeatherForcast = ({data}: HourlyTemperatureProps) => {
  return (
    <div>WeatherForcast</div>
  )
}

export default WeatherForcast
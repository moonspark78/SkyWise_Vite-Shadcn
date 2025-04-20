import { GeocodingResponse, WeatherData } from "@/api/types"

interface CurrentWeatherProps {
    data: WeatherData;
    locationName?: GeocodingResponse;
}

const CurrentWeather = ({data, locationName}) => {
  return (
    <div>CurrentWeather</div>
  )
}

export default CurrentWeather
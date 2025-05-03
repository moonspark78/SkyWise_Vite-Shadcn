import type { WeatherData } from "@/api/types"

interface WeatherDetailsProps {
    data: WeatherData
}

const WeatherDetails = ({data}: WeatherDetailsProps) => {
  return (
    <div>WeatherDetails</div>
  )
}

export default WeatherDetails
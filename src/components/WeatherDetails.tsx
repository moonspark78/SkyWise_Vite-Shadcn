import type { WeatherData } from "@/api/types"
import { format } from "path";
import { title } from "process";

interface WeatherDetailsProps {
    data: WeatherData
}

const WeatherDetails = ({data}: WeatherDetailsProps) => {
    const { main, wind, sys } = data;

    const details =[
        {
            title: "Sunrise",
            value: formatTime(sys.sunrise),
            icon: Sunrise,
            color: "text-orange-500"
        }
    ]

  return (
    <div>WeatherDetails</div>
  )
}

export default WeatherDetails
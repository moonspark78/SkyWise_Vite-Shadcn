import type { WeatherData } from "@/api/types"
import { format } from "date-fns";
import { Sunrise, Sunset } from "lucide-react";


interface WeatherDetailsProps {
    data: WeatherData
}

const WeatherDetails = ({data}: WeatherDetailsProps) => {
    const { main, wind, sys } = data;

    const formatTime = (timestamp: number) => {
        return format (new Date(timestamp * 1000), "h:mm a");
    };

    const details =[
        {
            title: "Sunrise",
            value: formatTime(sys.sunrise),
            icon: Sunrise,
            color: "text-orange-500"
        },
        {
            title: "Sunset",
            value: formatTime(sys.sunset),
            icon: Sunset,
            color: "text-blue-500"
        },
    ];

  return (
    <div>WeatherDetails</div>
  )
}

export default WeatherDetails
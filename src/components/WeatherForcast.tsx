import type { ForecastData } from "@/api/types";
import { format } from "date-fns";


interface WeatherForcastProps {
  data: ForecastData;
}

const WeatherForcast = ({data}: WeatherForcastProps) => {


    const dailyForcast = data.list.reduce((acc,forecast) =>{
        const date = format(new Date(forecast.dt * 1000), 'yyyy-MM-dd');
    }, {})

    
  return (
    <div>WeatherForcast</div>
  )
}

export default WeatherForcast
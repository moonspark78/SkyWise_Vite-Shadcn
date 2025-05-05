import type { ForecastData } from "@/api/types";
import { format } from "date-fns";


interface WeatherForcastProps {
  data: ForecastData;
}

const WeatherForcast = ({data}: WeatherForcastProps) => {


    const dailyForcast = data.list.reduce((acc,forecast) =>{
        const date = format(new Date(forecast.dt * 1000), 'yyyy-MM-dd');

        if(!acc[date]){
            acc[date] = {
                temp_min: forecast.main.temp_min,
                temp_max: forecast.main.temp_max,
                humidity: forecast.main.humidity,
                wind: forecast.wind.speed,
                weather: forecast.weather[0],
                date: forecast.dt,
            };
        }else {
            
        }
    }, {})

    
  return (
    <div>WeatherForcast</div>
  )
}

export default WeatherForcast
import { GeocodingResponse, WeatherData } from "@/api/types";
import { Card, CardContent, } from "./ui/card";

interface CurrentWeatherProps {
  data: WeatherData;
  locationName?: GeocodingResponse;
}

const CurrentWeather = ({ data, locationName }: CurrentWeatherProps) => {
  const {
    weather : [currentWeather],
    main: { temp, feels_like, humidity, temp_min, temp_max },
    wind: { speed },
  }= data

  return (
    <Card className="overflow-hidden"> 
      <CardContent className="p-6">
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;

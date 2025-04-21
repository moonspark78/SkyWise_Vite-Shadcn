import { GeocodingResponse, WeatherData } from "@/api/types";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

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
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default CurrentWeather;

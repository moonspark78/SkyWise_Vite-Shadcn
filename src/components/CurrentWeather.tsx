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

  const formatTemp = (temp: number) => `${Math.round(temp)}°C`

  return (
    <Card className="overflow-hidden"> 
      <CardContent className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-end gap-1">
                  <h2 className="text-2xl font-bold tracking-tighter">{locationName?.name}</h2>
                  {
                    locationName?.state &&(
                      <span className="text-muted-foreground">
                        , {locationName.state}
                      </span>
                    )
                  }
              </div>
              <p className="text-sm text-muted-foreground">
                {locationName?.country}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-5xl font-bold tracking-tighter">
                {formatTemp(temp)}
              </p>

              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">
                  Feels like: {formatTemp(feels_like)}
                </p>
              </div>

            </div>
            
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;

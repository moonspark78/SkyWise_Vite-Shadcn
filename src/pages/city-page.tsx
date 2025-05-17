import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useForecastQuery, useWeatherQuery } from "@/hooks/use-weather";
import { AlertTriangle } from "lucide-react";
import { use } from "react";
import { useParams, useSearchParams } from "react-router-dom";


const CityPage = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");

  const coordinates = { lat, lon };

  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);

  if(weatherQuery.error || forecastQuery.error){
    return(
      <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle> Error</AlertTitle>
      <AlertDescription className="flex flex-col gap-4">
        Failed to load weather data. Please try again.
      </AlertDescription>
    </Alert>
    )
  }

  return (
    <div>CityPage</div>
  )
}

export default CityPage
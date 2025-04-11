import { Button } from "@/components/ui/button"
import { get } from "http";
import { RefreshCcw } from "lucide-react"


const WeatherDashboard = () => {
  const { coordinates, error, getLocation ,isLoading } = useGeolocation();
  console.log(coordinates);

  const handleRefresh = () =>{
    getLocation();
    if(coordinates){
      //reload weather data
    }
  }
  
  return (
    <div className="space-y-4">
      {/* Favorite Cities */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button 
          variant={"outline"} 
          size={"icon"}
          onClick={handleRefresh}
          //disabled={}
          >
          <RefreshCcw className="h-4 w-4"/>
        </Button>
      </div>
      {/* Current and Hourly weather */}
    </div>
  )
}

export default WeatherDashboard
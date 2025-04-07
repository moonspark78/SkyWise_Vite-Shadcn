import { Button } from "@/components/ui/button"
import { RefreshCcw } from "lucide-react"


const WeatherDashboard = () => {
  return (
    <div>
      {/* Favorite Cities */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl">My Location</h1>
        <Button>
          <RefreshCcw/>
        </Button>
      </div>
      {/* Current and Hourly weather */}
    </div>
  )
}

export default WeatherDashboard
import { Coordinates } from "@/api/types";
import { useState } from "react"

interface GeolocationState {
    coordinates: Coordinates | null;
    error: string | null;
    isLoading: boolean;
    
}


const useGeolocation = () => {
    const [locationData, setLocationData] = useState<GeolocationState>({
        coordinates: null,
        error: null,
        isLoading: false
    });
  return (
    <div>useGeolocation</div>
  )
}

export default useGeolocation
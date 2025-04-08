import { Coordinates } from "@/api/types";
import { useEffect, useState } from "react"

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

    const getLocation=()=>{
        setLocationData((prev) => ({...prev, isLoading: true, error: null}));
    }


    useEffect(()=>{
        getLocation();
    },[])


  return {
    ...locationData,
    getLocation
  }
}

export default useGeolocation
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
        if (!navigator.geolocation) {
            setLocationData({
                coordinates: null,
                isLoading: false,
                error: "Geolocation is not supported by this browser."
            });
            return;
        }
        navigator.geolocation.getCurrentPosition((position) =>{
            setLocationData({
                coordinates:{
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                },
                error: null,
                isLoading: false,
            });
        },(error)=>{
            let errorMessage: string;

            switch (error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = "Location permission denied. Please enable location access.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = "Location information is unavailable.";
                    break;
                case error.TIMEOUT:
                    errorMessage = "Location request timed out.";
                    break;
                    default:
                    errorMessage = "An unknown error occurred.";
            }
        });
    };


    useEffect(()=>{
        getLocation();
    },[])


  return {
    ...locationData,
    getLocation
  }
}

export default useGeolocation
import { Coordinates } from "@/api/types";
import { useQuery } from "@tanstack/react-query";


export const WEATHER_KEYS={
    weather : (coords: Coordinates) => ['weather', coords] as const,
}


export function useWeatherQuery(coordinates: Coordinates | null){
    useQuery({
        queryKey: ,
    })
}
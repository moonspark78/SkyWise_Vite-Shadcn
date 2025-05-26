import { useFavorites } from "@/hooks/use-favorites";
import { ScrollArea } from "./ui/scroll-area";
import { useNavigate } from "react-router-dom";
import { useWeatherQuery } from "@/hooks/use-weather";

interface FavoriteCityTabletProps{
    id: string;
    name: string;
    lat: number;
    lon: number;
    onRemove: (id: string) => void;
}


const FavoriteCities = () => {
    const {favorites, removeFavorite} = useFavorites();
    if(!favorites.length){
        return null
    }

  return (
    <>
        <h1 className="text-xl font-bold tracking-tight">Favorites</h1>
        <ScrollArea className="w-full pb-4">
            <div className="flex gap-4">

            </div>
        </ScrollArea>
    </>
  )
}

function FavoriteCityTablet({id, name, lat, lon, onRemove}: FavoriteCityTabletProps) {
   const navigate = useNavigate();
   const { data: weather, isLoading } = useWeatherQuery({lat, lon});

   return (
    <div onClick={() => navigate(`/city/${name}?lat=${lat}&lon=${lon}`)}></div>
   );
}

export default FavoriteCities
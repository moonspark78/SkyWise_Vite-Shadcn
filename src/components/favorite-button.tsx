import { WeatherData } from "@/api/types"
import { useFavorites } from "@/hooks/use-favorites";
import { Button } from "./ui/button";


interface FavoriteButtonProps {
    data: WeatherData
}

const FavoriteButton = ({data}: FavoriteButtonProps) => {
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();
    const isCurrentlyFavorite = isFavorite(data.coord.lat, data.coord.lon);

    
  return (
    <Button
        variant={isCurrentlyFavorite ? "destructive" : "default"}
        size={"icon"}
        className={isCurrentlyFavorite ? "bg-yellow-500 hover:bg-yellow-600" : "" }
    >

    </Button>
  )
}

export default FavoriteButton
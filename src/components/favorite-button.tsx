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
    >

    </Button>
  )
}

export default FavoriteButton
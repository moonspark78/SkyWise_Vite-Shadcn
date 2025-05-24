import { WeatherData } from "@/api/types"


interface FavoriteButtonProps {
    data: WeatherData
}

const FavoriteButton = ({data}: FavoriteButtonProps) => {
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();
    const isCurrentlyFavorite = isFavorite(data.coord.lat, data.coord.lon);

    
  return (
    <div>favorite-button</div>
  )
}

export default FavoriteButton
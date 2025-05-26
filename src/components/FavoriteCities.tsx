import { useFavorites } from "@/hooks/use-favorites";


const FavoriteCities = () => {
    const {favorites, removeFavorite} = useFavorites();
  return (
    <div>FavoriteCities</div>
  )
}

export default FavoriteCities
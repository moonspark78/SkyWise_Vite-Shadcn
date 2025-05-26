import { useFavorites } from "@/hooks/use-favorites";


const FavoriteCities = () => {
    const {favorites, removeFavorite} = useFavorites();
    if(!favorites.length){
        return null
    }

  return (
    <>
        <h1 className="text-xl font-bold tracking-tight">Favorites</h1>
    </>
  )
}

export default FavoriteCities
import { useFavorites } from "@/hooks/use-favorites";
import { ScrollArea } from "./ui/scroll-area";


const FavoriteCities = () => {
    const {favorites, removeFavorite} = useFavorites();
    if(!favorites.length){
        return null
    }

  return (
    <>
        <h1 className="text-xl font-bold tracking-tight">Favorites</h1>
        <ScrollArea className="w-full pb-4"></ScrollArea>
    </>
  )
}

export default FavoriteCities
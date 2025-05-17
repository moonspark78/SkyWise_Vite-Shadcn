import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "./use-local-storage";


interface FavoriteCity {
    id: string;
    name: string;
    lat: number;
    lon: number;
    country: string;
    state?: string;
    addedAt: number;
}


export function useFavorites() {
    const [favorites, setFavorites] = useLocalStorage<FavoriteCity[]>("favorites", []);

    const queryClient= useQueryClient();

    const favoriteQuery = useQuery({
        queryKey: ["favorites"],
        queryFn: () => favorites,
        initialData: favorites,
        staleTime: Infinity,
    })

    const addToFavorite = useMutation({
        mutationFn: async(
            city: Omit<FavoriteCity, "id" | "addedAt">
        ) =>{
            const newFavorite: FavoriteCity = {
                ...city,
                id: `${city.lat}-${city.lon}-${Date.now()}`,
                addedAt: Date.now(),
            };

            const exists = favorites.some((fav) => fav.id === newFavorite.id);
            if (exists) return favorites;

            const newFavorites = [...favorites, newFavorite].slice(0, 10);

            setFavorites(newFavorites);
            return newFavorites;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["favorites"],
            })
        },
    });

    const clearHistory = useMutation({
        mutationFn: async () => {
            setHistory([]);
            return [];
        },
        onSuccess: () => {
            queryClient.setQueryData(["search-history"], []);
        },
    })

    return {
        history: historyQuery.data ?? [],
        addToHistory,
        clearHistory,
    }
}
import { useLocalStorage } from "./use-local-storage";


export function useSearchHistory() {
    const [history, setHistory] = useLocalStorage<SearchHistoryItem[]>("search-history", []);
}
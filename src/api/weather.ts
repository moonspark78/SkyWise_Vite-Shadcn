import { API_CONFIG } from "./config"
import { Coordinates } from "./types"

class WeatherAPI{
    private createUrl(endpoint: string,params: Record<string,string | number>) {
        const searchParams = new URLSearchParams({
            appid: API_CONFIG.API_KEY,
            ...params
        })
        return `${endpoint}?${searchParams.toString()}`
    };

    private async fetchData<T>(url: string): Promise<T> {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`)
        }
        return response.json()
    };

    async getCurrentWeather({lat,lon}:Coordinates): Promise<> {
        const url = this.createUrl(`${API_CONFIG.BASE_URL}/weather`, {
            lat: lat.toString(),
            lon: lon.toString(),
            units: API_CONFIG.DEFAULT_PARAMS.units,
        });
    }

    async getForecast() {}

    async reverseGeocode() {}

}
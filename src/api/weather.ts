import { API_CONFIG } from "./config"

class WeatherAPI{
    private createUrl(endpoint: string,params: Record<string,string | number>) {
        const searchParams = new URLSearchParams({
            appid: API_CONFIG.API_KEY,
            ...params
        })
        return `${endpoint}`
    };

    private fetchData() {};

    async getCurrentWeather() {}

    async getForecast() {}

    async reverseGeocode() {}

}
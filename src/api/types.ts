export interface Coordinates{
    lat: number;
    lon: number;
}

export interface WeatherCondition{
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface WeatherData {
    coord: Coordinates;
    weather: WeatherCondition[];
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    wind: {
      speed: number;
      deg: number;
    };
    sys: {
      sunrise: number;
      sunset: number;
      country: string;
    };
    name: string;
    dt: number;
}
  
export interface ForecastData {
    list: Array<{
      dt: number;
      main: WeatherData["main"];
      weather: WeatherData["weather"];
      wind: WeatherData["wind"];
      dt_txt: string;
    }>;
    city: {
      name: string;
      country: string;
      sunrise: number;
      sunset: number;
      timezone: number;
      coord: Coordinates;
      population?: number;
      area?: number;
      elevation?: number;
      post_code?: string;
      timezone_name?: string;
      country_code?: string;
      state?: string; 
      is_capital?: boolean;
    };
}

export interface GeocodingResponse {
  name: string;
  local_names?: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
  state?: string;
  is_capital: boolean;
  population?: number;
  timezone: string;
  elevation?: number;
  post_code?: string;
  area?: number;
  country_code: string;
}

export interface Coordinates{
    lat: number;
    lon: number;
    name?: string;
}

export interface WeatherCondition{
    id: number;
    main: string;
    description: string;
    icon: string;
    icon_url?: string;
    icon_url_2x?: string;
    icon_url_4x?: string;
    icon_url_10x?: string;
    icon_url_animated?: string;
    icon_url_animated_2x?: string;
    icon_url_animated_4x?: string;
    icon_url_animated_10x?: string;
    custom_icon?: string;
    custom_icon_2x?: string;
    custom_icon_4x?: string;
    custom_icon_10x?: string;
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
      sea_level?: number;
      grnd_level?: number;
      temp_kf?: number; // Optional, used in some APIs
    };
    wind: {
      speed: number;
      deg: number;
      gust?: number;
    };
    sys: {
      sunrise: number;
      sunset: number;
      country: string;
      id?: number;
      type?: number;
      message?: number;
      visibility?: number; // Optional, used in some APIs
    };
    name: string;
    dt: number;
    id: number;
    base: string;
    cod: number;
    timezone: number;
    visibility?: number; // Optional, used in some APIs
    clouds?: {
      all: number;
      visibility?: number; // Optional, used in some APIs
      pop?: number; // Optional, used in some APIs
    };
    rain?: {
      '1h'?: number; // Rain volume for the last 1 hour
      '3h'?: number; // Rain volume for the last 3 hours
    };
}
  
export interface ForecastData {
    list: Array<{
      dt: number;
      main: WeatherData["main"];
      weather: WeatherData["weather"];
      wind: WeatherData["wind"];
      dt_txt: string;
      sys?: Partial<WeatherData["sys"]>;
      
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

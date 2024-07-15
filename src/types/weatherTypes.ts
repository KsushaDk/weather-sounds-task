export type WeatherMode = "summer" | "rain" | "winter";

export interface WeatherItem {
  mode: WeatherMode;
  sound: string;
  bg: string;
  svg: string;
}

export interface AudioMap {
  [key: string]: HTMLAudioElement;
}

export interface ImageMap {
  [key: string]: string;
}

export type DataWeatherItems = WeatherItem[];

import { LocationWeather } from "../domains/location";

export const locations = [
  {
    id: "1",
    location: "New York",
    temperature: 25,
    condition: "Sunny",
    humidity: 60,
    windSpeed: 10,
    icon: "sun",
  },
  {
    id: "2",
    location: "London",
    temperature: 18,
    condition: "Cloudy",
    humidity: 75,
    windSpeed: 15,
    icon: "cloud",
  },
] as LocationWeather[];

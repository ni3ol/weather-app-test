export type Unit = "Celsius" | "Fahrenheit";

export const unitShortHand = (unit: Unit) => (unit === "Celsius" ? "°C" : "°F");

import { LocationWeather } from "../../locations/domains/location";
import { Unit, unitShortHand } from "../../metric/domain/unit";
import { MetricCard } from "./metric-card";

export const Day = ({
  location,
  unit,
}: {
  location: LocationWeather;
  unit: Unit;
}) => {
  const { temperature, condition, humidity, windSpeed } = location;
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        justifyContent: "space-between",
        margin: 20,
      }}
    >
      <MetricCard
        title="Temperature"
        metric={`${temperature} ${unitShortHand(unit)}`}
      />
      <MetricCard title="Condition" metric={condition} />
      <MetricCard title="Humidity" metric={humidity} />
      <MetricCard title="WindSpeed" metric={windSpeed} />
    </div>
  );
};

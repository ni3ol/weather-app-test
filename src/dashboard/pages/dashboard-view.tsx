import { useState } from "react";
import { LocationWeather } from "../../locations/domains/location";
import { Day } from "../components/day";
import { ForeCast } from "../components/forecast";
import { Unit } from "../../metric/domain/unit";
import { Select } from "../../shared/components/select";

export const DashboardView = ({
  locations,
}: {
  locations: LocationWeather[];
}) => {
  // TODO: Wrap in layout componenent
  const [activeLocation, setActiveLocation] = useState<string>("");
  const [view, setView] = useState<"day" | "forecast">("day");
  const [unit, setUnit] = useState<Unit>("Celsius");

  const selectedLocation = locations.find(
    (location) => location.id === activeLocation
  );

  console.log(activeLocation, selectedLocation, locations);

  return (
    <div style={{ padding: 30 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Weather Data</h1>
        <div>
          <span style={{ marginRight: 10 }}>Select a location</span>
          <select
            value={activeLocation}
            onChange={(e) => setActiveLocation(e.target.value)}
          >
            <option value="">Select a location</option>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.location}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Select
            value={unit}
            onChange={(e) => setUnit(e.target.value as Unit)}
            label="Select a unit"
            options={[
              { key: "Celsius", label: "Celsius" },
              { key: "Fahrenheit", label: "Fahrenheit" },
            ]}
          />
        </div>
      </div>
      <div style={{ textAlign: "center", maxWidth: 800, margin: "auto" }}>
        {selectedLocation ? (
          <>
            <div>
              <span>{selectedLocation.icon}</span>
              <h1>{selectedLocation.location}</h1>
              <select
                value={view}
                onChange={(e) => setView(e.target.value as "day" | "forecast")}
              >
                <option value="day">Day</option>
                <option value="forecast">Forecast</option>
              </select>
            </div>
            {view === "day" ? (
              <Day location={selectedLocation} unit={unit} />
            ) : (
              <ForeCast />
            )}
          </>
        ) : (
          <div>No location selected</div>
        )}
      </div>
    </div>
  );
};

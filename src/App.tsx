import React, { useEffect } from "react";
import { getLocations } from "./locations/actions/get-locations";
import { LocationWeather } from "./locations/domains/location";
import { DashboardView } from "./dashboard/pages/dashboard-view";

function App() {
  const [locations, setLocations] = React.useState<LocationWeather[]>([]);

  useEffect(() => {
    const getLocationsData = async () => {
      const response = await getLocations();
      if (response.data) {
        setLocations(response.data);
      }
    };
    getLocationsData();
  }, []);

  return <DashboardView locations={locations} />;
}

export default App;

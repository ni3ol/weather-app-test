import { locations } from "./mock";

export const getLocations = async () => {
  return Promise.resolve({ data: locations });
};

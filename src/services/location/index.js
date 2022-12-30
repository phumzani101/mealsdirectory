import camelize from "camelize";
import { locations } from "./locationMock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const mock = locations[searchTerm];
    if (!mock) {
      reject("Not Found");
    }
    resolve(mock);
  });
};

export const locationTransform = (data) => {
  const response = camelize(data);
  const { geometry = {} } = camelize(response.results[0]);
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};

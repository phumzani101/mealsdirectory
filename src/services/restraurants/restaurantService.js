import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not Found");
    }
    resolve(mock);
  });
};

export const restaurantTransform = (data) => {
  const results = data.results.map((restaurant) => {
    restaurant.photos = [
      "https://placeimg.com/640/480/any",
      "https://placeimg.com/640/480/any",
    ];
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isClosedTemporary: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });
  return camelize(results);
};

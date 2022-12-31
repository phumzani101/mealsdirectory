import React, { useState, createContext, useEffect, useContext } from "react";
import { LocationContext } from "../location/LocationContext";
import { restaurantRequest, restaurantTransform } from "./restaurantService";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const loadRestaurant = (locationString) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantRequest(locationString)
        .then(restaurantTransform)
        .then((res) => {
          setRestaurants(res);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const loc = `${location.lat},${location.lng}`;
      loadRestaurant(loc);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};

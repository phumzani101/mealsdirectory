import React, { useState, createContext, useEffect } from "react";
import { locationRequest, locationTransform } from "./index";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword.toLowerCase());
  };

  useEffect(() => {
    if (keyword) {
      locationRequest(keyword)
        .then(locationTransform)
        .then((res) => {
          setLocation(res);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ location, isLoading, error, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};

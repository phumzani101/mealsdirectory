import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../auth/AuthContext";

export const FavouriteContext = createContext();

export const FavouriteContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthContext);

  const addToFavourites = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const removeFromFavourites = (restaurant) => {
    const newFavourites = favourites.filter(
      (f) => f.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  const storeData = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      // saving error
      console.log(e.message);
    }
  };

  const getData = async (uid) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@favourites-${uid}`);
      return jsonValue != null ? setFavourites(JSON.parse(jsonValue)) : null;
    } catch (e) {
      // error reading value
      console.log(e.message);
    }
  };

  useEffect(() => {
    if (user) {
      getData(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      storeData(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

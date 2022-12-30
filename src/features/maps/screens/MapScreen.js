import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
// import { StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/LocationContext";
import { RestaurantContext } from "../../../services/restraurants/RestaurantContext";
import MapCallout from "../components/MapCallout";
import MapSearchBar from "../components/MapSearchBar";

const MapContainer = styled.View`
  flex: 1;
`;

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

function MapScreen({ navigation }) {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <MapContainer>
      <MapSearchBar />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestraurantDetails", {
                    restaurant,
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </MapContainer>
  );
}

export default MapScreen;

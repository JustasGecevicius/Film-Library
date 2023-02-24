import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getLocation } from "./api";
const coordinateToCountry = require("coordinate_to_country");

export const useCountry = () => {
  const [country, setCountry] = useState<string>();
  const [coordinates, setCoordinates] = useState<{latitude : number, longitude : number}>();
 navigator.geolocation.getCurrentPosition((success) => {
      const { latitude, longitude } = success.coords;
      setCoordinates({latitude, longitude})
    });
useEffect (() => {
  if(coordinates && !country){
    const country = coordinateToCountry(coordinates.latitude, coordinates.longitude, true);
    setCountry(country);
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[coordinates, country]);
return country
};

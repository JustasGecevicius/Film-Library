import { useFirebaseContext } from "features/context/FirebaseContext";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getLocation } from "./api";

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export const useCountry = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | undefined>(undefined);
  if (!coordinates)
    navigator.geolocation.getCurrentPosition((success) => {
      const { latitude, longitude } = success.coords;
      setCoordinates({ latitude, longitude });
    });
  const { data: location } = useQuery(
    ["location", coordinates],
    () => {
      return getLocation(coordinates?.latitude, coordinates?.longitude);
    },
    {
      enabled: !!coordinates,
      staleTime:1800000,
    }
  );
  return location?.postalCodes[0].countryCode;
};

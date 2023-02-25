import axios from "axios";
import { GetLocation } from "./types";

export const getLocation = (
  lat: number | undefined,
  lng: number | undefined
) => {
  const url = new URL ("http://api.geonames.org/findNearbyPostalCodesJSON?");
  if(lat && lng){
    url.searchParams.set("lat", lat?.toString());
    url.searchParams.set("lng", lng?.toString());
    url.searchParams.set("username", "justgece");
  }
  return axios
    .get<GetLocation>(url.toString())
    .then((response) => {
      return response.data;
    });
};

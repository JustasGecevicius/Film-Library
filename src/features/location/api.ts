import axios from "axios";

export const getLocation = (
  lat: string | number | undefined,
  long: string | number | undefined
) => {
  return axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyAv9IayUgxqZbnQdJwtnhvKCVeoQYTkvKI`
    )
    .then((response) => {
      return response.data;
    });
};

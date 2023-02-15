import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMovieData } from "./api";

export const useMovieData = () => {
  const { id } = useParams();
  const { data: movieData } = useQuery(
    ["movie", id],
    () => {
      return getMovieData(id);
    },
    {
      enabled: !!id,
    }
  );
  return movieData;
};

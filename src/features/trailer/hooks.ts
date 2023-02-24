import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getTrailer } from "./api";

export const useTrailer = (name : string, year : string) => {
  const [trailerLink, setTrailerLink] = useState<string>();
  const {data : trailer} = useQuery(["trailer", name, year], () => {
    return getTrailer(`${name} ${year.split("-")[0]}`);
  }, {
    enabled:!! name && !!year,
  })
  useEffect (() => {
    if(!trailer) return;
    setTrailerLink(`https://www.youtube.com/embed/${trailer.items[0].id.videoId}`);
  },[trailer]);
  return trailerLink
  }
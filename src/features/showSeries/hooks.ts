import { getConfig } from "features/config/api";
import { getSeriesData } from "features/series/api";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

interface BackdropAndPoster {
  backdropURL:string;
  posterURL:string;
}

export const useBackdrop = () => {
  const [backdropAndPoster, setBackdropAndPoster] = useState<BackdropAndPoster>();
  const { data: config } = useQuery("config", getConfig);
  const { seriesId } = useParams();

  const { data: seriesData } = useQuery(
    ["series", seriesId],
    () => {
      return getSeriesData(seriesId);
    },
    {
      enabled: !!seriesId,
    }
  );
    console.log(seriesData);
  useEffect(() => {
    if (seriesData && config) {
      const backdropURL =
        config["images"]["base_url"] +
        config["images"]["backdrop_sizes"][3] +
        seriesData["backdrop_path"];
      const posterURL =
        config["images"]["base_url"] +
        config["images"]["poster_sizes"][6] +
        seriesData["poster_path"];
      setBackdropAndPoster({backdropURL, posterURL});
    }
  }, [config, seriesData]);
  return backdropAndPoster;
}
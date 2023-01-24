import { useEffect, useState } from "react";

// Components
import { ImagePoster } from "../../components/ImagePoster";

// Features
import { getConfig } from "features/config/api";
import { getTrendingMovies } from "features/movies/api";

// Types
import { GetConfig } from "features/config/types";
import { GetTrendingMovies } from "features/movies/types";

// Styles
import "../../css/popularMovies.css";

export const PopularMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState<GetTrendingMovies>();
  const [config, setConfig] = useState<GetConfig>();
  const [src, setSrc] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: configData } = await getConfig();
      const { data: trendingMoviesData } = await getTrendingMovies();

      setConfig(configData);
      setTrendingMovies(trendingMoviesData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!config || !trendingMovies) return;

    // Config
    const configUrl = config["images"]["base_url"];
    const configSize = config["images"]["poster_sizes"][2];

    setSrc(
      trendingMovies["results"].map(
        (m) => configUrl + configSize + m["poster_path"]
      )
    );
  }, [config, trendingMovies]);

  if (!config || !trendingMovies) {
    return <div>Loading...</div>;
  }

  return (
    <div className="popularMoviesSection">
      <h2>Popular Movies</h2>
      <div className="movieHolder">
        {src.map((elem, index) => {
          return (
            <ImagePoster
              imageLink={elem}
              name={trendingMovies["results"][index]["title"]}
              releaseDate={trendingMovies["results"][index]["release_date"]}
              key={index}
            ></ImagePoster>
          );
        })}
      </div>
    </div>
  );
};

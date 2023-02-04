// Functions
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  filterProductionCompanies,
} from "features/movies/functions";
import { useQuery } from "react-query";

// Types
import {
  BackdropType,
  ProductionCompany,
} from "features/movies/types";

// Components
import { Backdrop } from "./components/Backdrop";
import { Genres } from "./components/Genres";
import { Description } from "./components/Description";
import { LikeAndRate } from "./components/LikeAndRate";
import { VisitHomepage } from "./components/VisitHomepage";
import { MovieNumbers } from "./components/MovieNumbers";
import { ProducedBy } from "./components/ProducedBy";

// Apis
import { getConfig } from "features/config/api";
import { getMovieData } from "features/movies/api";

// Styles 
import "../../css/showMovie.css";


export const ShowMovie = () => {
  // Getting the movie id from router parameters
  const { movieId } = useParams();
  // Fetching the configuration information 
  const { data: config } = useQuery("config", getConfig);
  // States for production companies and backdrop images
  const [backdropImages, setBackdropImages] = useState<BackdropType>();
  const [productionCompanies, setProductionCompanies] =
    useState<ProductionCompany[]>();
  // Fetching the movie data
  const { data: movies } = useQuery(["moviedata", movieId], () =>
    getMovieData(movieId)
  );

  // UseEffect for setting the backdrop images and the production companies
  useEffect(() => {
    if (movies && config) {
      const backdrop = `${config["images"]["base_url"]}${config["images"]["backdrop_sizes"][3]}${movies["backdrop_path"]}`;
      const poster = `${config["images"]["base_url"]}${config["images"]["poster_sizes"][6]}${movies["poster_path"]}`;
      const productionCompanyData = filterProductionCompanies(
        config,
        movies["production_companies"]
      );
      setBackdropImages({ backdropURL: backdrop, posterURL: poster });
      setProductionCompanies(productionCompanyData);
    }
  }, [config, movies]);

  if (movieId === undefined) return <></>;

  return (
    <>
      {backdropImages && movies ? (
        <Backdrop
          backdrop={backdropImages["backdropURL"]}
          poster={backdropImages["posterURL"]}
          title={movies["title"]}
        />
      ) : null}
      {movies ? (
        <>
          <Genres genres={movies["genres"]} />
          <LikeAndRate movieId={movieId} title={movies["title"]} />
          <Description overview={movies["overview"]} />
          {movies["homepage"] ? (
            <VisitHomepage link={movies["homepage"]} />
          ) : null}
          <MovieNumbers
            budget={movies["budget"]}
            revenue={movies["revenue"]}
            runtime={movies["runtime"]}
            voteAverage={movies["vote_average"]}
          />
          {productionCompanies ? (
            <ProducedBy productionCompanies={productionCompanies} />
          ) : null}
        </>
      ) : null}
    </>
  );
};

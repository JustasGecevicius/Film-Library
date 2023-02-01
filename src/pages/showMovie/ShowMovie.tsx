//functions
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//types
import { GetConfig } from "features/config/types";
import { MovieData, BackdropType, ProductionCompany } from "features/movies/types";
//components
import { Backdrop } from "./components/Backdrop";
import "../../css/showMovie.css";
import { Genres } from "./components/Genres";
import { Description } from "./components/Description";
import { LikeAndRate } from "./components/LikeAndRate";
import { VisitHomepage } from "./components/VisitHomepage";
import { MovieNumbers } from "./components/MovieNumbers";
import { ProducedBy } from "./components/ProducedBy";
import {
  fetchData,
  filterProductionCompanies,
} from "features/movies/functions";

export const ShowMovie = () => {
  //states
  const [config, setConfig] = useState<GetConfig>();
  const [data, setData] = useState<MovieData>();
  const [backdropImages, setBackdropImages] = useState<BackdropType>();
  const [productionCompanies, setProductionCompanies] = useState<ProductionCompany[]>();
  //router Parameters
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) fetchData({ movieId, setConfig, setData });
  }, [movieId]);

  useEffect(() => {
    if (data && config) {
      const backdrop =
        config["images"]["base_url"] +
        config["images"]["backdrop_sizes"][3] +
        data["backdrop_path"];
      const poster =
        config["images"]["base_url"] +
        config["images"]["poster_sizes"][6] +
        data["poster_path"];
      const productionCompanyData = filterProductionCompanies(
        data["production_companies"],
        config
      );
      setBackdropImages({ backdropURL: backdrop, posterURL: poster });
      setProductionCompanies(productionCompanyData);
    }
  }, [config, data]);

  if (movieId === undefined) return <></>;

  return (
    <>
      {backdropImages && data ? (
        <Backdrop
          backdrop={backdropImages["backdropURL"]}
          poster={backdropImages["posterURL"]}
          title={data["title"]}
        />
      ) : null}
      {data ? (
        <>
          <Genres genres={data["genres"]} />
          <LikeAndRate movieId={movieId} title={data["title"]} />
          <Description overview={data["overview"]} />
          {data["homepage"] ? <VisitHomepage link={data["homepage"]} /> : null}
          <MovieNumbers
            budget={data["budget"]}
            revenue={data["revenue"]}
            runtime={data["runtime"]}
            voteAverage={data["vote_average"]}
          />
          {productionCompanies ? (
            <ProducedBy productionCompanies={productionCompanies} />
          ) : null}
        </>
      ) : null}
    </>
  );
};

import { getConfig } from "features/config/api";
import { GetConfig } from "features/config/types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Backdrop } from "./components/Backdrop";
import { getMovieData } from "./features/api";
import { MovieData } from "./features/types";
import "../../css/showMovie.css";
import { Genres } from "./components/Genres";
import { Description } from "./components/Description";
import { LikeAndRate } from "./components/likeAndRate/LikeAndRate";
import { VisitHomepage } from "./components/VisitHomepage";
import { MovieNumbers } from "./components/movieNumbers/MovieNumbers";
import { productionCompanyInformationFilter } from "./features/productionCompanyInformation";
import { ProducedBy } from "./components/productionCompanies/ProducedBy";

interface Props {}

export const ShowMovie: React.FC<Props> = () => {
    const [config, setConfig] = useState<GetConfig>();
    const [data, setData] = useState<MovieData>();
    const [backdropURL, setBackdropURL] = useState<string>();
    const [posterURL, setPosterURL] = useState<string>();
    const [productionCompanies, setProductionCompanies] = useState<any>();
    const { movieId } = useParams();

    useEffect(() => {
        const fetch = async () => {
            if (!movieId) return;
            const { data: movieData } = await getMovieData(movieId);
            const { data: configuration } = await getConfig();
            setConfig(configuration);
            setData(movieData);
        };
        fetch();
    }, []);

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
            const productionCompanyData = productionCompanyInformationFilter(
                data["production_companies"],
                config
            );
            setPosterURL(poster);
            setBackdropURL(backdrop);
            setProductionCompanies(productionCompanyData);
        }
    }, [config, data]);

    if(movieId === undefined) return <></>;

    return (
        <>
            {backdropURL && posterURL && data ? (
                <Backdrop
                    backdrop={backdropURL}
                    poster={posterURL}
                    title={data["title"]}
                />
            ) : null}
            {data ? (
                <>
                    <Genres genres={data["genres"]} />
                    <LikeAndRate id={movieId} title={data["title"]} />
                    <Description overview={data["overview"]} />
                    <VisitHomepage link={data["homepage"]} />
                    <MovieNumbers
                        budget={data["budget"]}
                        revenue={data["revenue"]}
                        runtime={data["runtime"]}
                        voteAverage={data["vote_average"]}
                    />
                    {productionCompanies ? (
                        <ProducedBy
                            productionCompanies={productionCompanies}
                        />
                    ) : null}
                </>
            ) : null}
        </>
    );
};

import React, { useEffect, useState } from "react";
import { PosterDisplay } from "reusableComponents/PosterDisplay";
import { getConfig } from "features/config/api";
import "../css/explore.css";
import { filterMovieInformation } from "features/movies/functions";
import { getTopRatedMovies, getTrendingMovies } from "features/movies/api";
import { MovieObjectType } from "features/movies/types";
import { GetConfig } from "features/config/types";

interface Props {}

export const Explore: React.FC<Props> = () => {
    const [config, setConfig] = useState<GetConfig>();
    const [popularMovies, setPopularMovies] = useState<MovieObjectType[]>();
    const [topRatedMovies, setTopRatedMovies] = useState<MovieObjectType[]>();

    useEffect(() => {
        const fetch = async () => {
            const { data: configuration } = await getConfig();
            const { data: popMovies } = await getTrendingMovies();
            const { data: topMovies } = await getTopRatedMovies();
            const popMovieData = filterMovieInformation(
                configuration,
                popMovies
            );
            const topMovieData = filterMovieInformation(
                configuration,
                topMovies
            );
            setConfig(configuration);

            setPopularMovies(popMovieData);
            setTopRatedMovies(topMovieData);
        };
        fetch();
    }, []);

    return (
        <>
            {popularMovies ? (
                <PosterDisplay
                    arr={popularMovies}
                    sectionName="Popular Movies"
                ></PosterDisplay>
            ) : null}

            {topRatedMovies ? (
                <PosterDisplay
                    arr={topRatedMovies}
                    sectionName="Top Rated Movies"
                ></PosterDisplay>
            ) : null}
        </>
    );
};

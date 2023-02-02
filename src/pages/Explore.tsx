import React, { useEffect, useState } from "react";
import { PosterDisplay } from "reusableComponents/PosterDisplay";
import { getConfig } from "features/config/api";
import "../css/explore.css";
import { filterMovieInformation } from "features/movies/functions";
import { getTopRatedMovies, getTrendingMovies } from "features/movies/api";
import { MovieObjectType } from "features/movies/types";
import { SearchArea } from "reusableComponents/SearchArea";
import { useQuery } from "react-query";

interface Props {}

export const Explore: React.FC<Props> = () => {
    // States for both trending and top movies
    const [trendingMovies, setTrendingMovies] = useState<MovieObjectType[]>();
    const [topMovies, setTopMovies] = useState<MovieObjectType[]>();

    // Fetching config trending movies and top rated movies
    const {data : config} = useQuery("config", getConfig);
    const {data : trending} = useQuery("trending", getTrendingMovies);
    const {data : top} = useQuery("trending", getTopRatedMovies);

    // UseEffect for setting the movie data to state
    useEffect (() => {
        if(config && trending){
            const trendingData = filterMovieInformation(config, trending);
            setTrendingMovies(trendingData);
        }
        if(config && top){
            const topData = filterMovieInformation(config, top);
            setTopMovies(topData);
        }
    },[trending, config, top]);

    return (
        <>
            <SearchArea/>
             {trendingMovies ? (
                <PosterDisplay
                    arr={trendingMovies}
                    sectionName="Popular Movies"
                ></PosterDisplay>
            ) : null}

            {topMovies ? (
                <PosterDisplay
                    arr={topMovies}
                    sectionName="Top Rated Movies"
                ></PosterDisplay>
            ) : null}
        </>
    );
};

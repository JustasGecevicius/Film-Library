import { SearchArea } from "components/SearchArea";
import React from "react";
import { TopRated } from "sections/movies/TopRated";
import { PopularMovies } from "sections/movies/PopularMovies";
import { PopularWithFriends } from "sections/movies/PopularWithFriends";

interface Props {}

export const Explore: React.FC<Props> = () => {
    return (
        <>
            <SearchArea></SearchArea>
            <PopularMovies></PopularMovies>
            <TopRated></TopRated>
            <PopularWithFriends></PopularWithFriends>
        </>
    );
};

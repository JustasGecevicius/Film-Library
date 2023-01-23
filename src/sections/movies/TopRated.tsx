/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { TopRatedApi, api } from "../../services/axios";
import { ImagePoster } from "../../components/ImagePoster";

interface Props {}

interface Config {
    change_keys: string[];
    images: {
        backdrop_sizes: string[];
        base_url: string;
        logo_sizes: string[];
        poster_sizes: string[];
        profile_sizes: string[];
        secure_base_url: string;
        still_sizes: string[];
    };
}

interface Images {
    page: number;
    results: ImagesObject[];
    total_pages: number;
    total_results: number;
}

interface ImagesObject {
    adult: boolean;
    backdrop_path: string | null;
    poster_path: string | null;
    original_title: string;
    release_date: string;
    vote_average: string;
    title: string;
}

export const TopRated: React.FC<Props> = () => {
    const [moviePictures, setMoviePictures] = useState<Images>();
    const [config, setConfig] = useState<Config>();
    const [src, setSrc] = useState<string[]>([]);

    // useEffect(() => {
    //     console.log(moviePictures);
    //     console.log(src);
    // }, [src]);

    useEffect(() => {
        const getConfig = async () => {
            const { data } = await api<Config>(
                "/configuration?api_key=2e1d9e703d345ef35e7a54d9ac882a26"
            );

            setConfig(data);
        };

        const getTrending = async () => {
            const { data } = await TopRatedApi<Images>(
                "https://api.themoviedb.org/3/movie/top_rated?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&page=1"
            );
            //console.log(data);
            setMoviePictures(data);
        };

        getConfig();
        getTrending();
    }, []);

    useEffect(() => {
        if (!config || !moviePictures) return;

        // Config
        const configUrl = config["images"]["base_url"];
        const configSize = config["images"]["poster_sizes"][2];

        setSrc(
            moviePictures["results"].map(
                (m) => configUrl + configSize + m["poster_path"]
            )
        );
    }, [config, moviePictures]);

    if (!config || !moviePictures) {
        return <div>Loading...</div>;
    }

    return (
        <div className="popularMoviesSection">
            <h2>Top Rated</h2>
            <div className="movieHolder">
                {src.map((elem, index) => {
                    return (
                        <ImagePoster
                        key={index}
                            imageLink={elem}
                            name={moviePictures["results"][index]["title"]}
                            releaseDate={
                                moviePictures["results"][index]["release_date"]
                            }
                        ></ImagePoster>
                    );
                })}
            </div>
        </div>
    );
};

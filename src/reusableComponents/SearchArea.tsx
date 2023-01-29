import React, { useEffect, useState } from "react";
import { Header } from "../sections/header/Header";
import { api } from "../services/axios";
import "../css/searchArea.css";
import { SearchBar } from "./showMovie/searchBar/SearchBar";

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
}

export const SearchArea: React.FC<Props> = () => {
    const [moviePictures, setMoviePictures] = useState<Images>();
    const [config, setConfig] = useState<Config>();
    const [imageIndex, setImageIndex] = useState<number>(0);
    const [src, setSrc] = useState<string[]>([]);

    // useEffect(() => {
    //     //console.log(moviePictures, config);
    // }, [moviePictures, config]);

    useEffect(() => {
        const getConfig = async () => {
            const { data } = await api<Config>(
                "/configuration?api_key=2e1d9e703d345ef35e7a54d9ac882a26"
            );

            setConfig(data);
        };

        const getTrending = async () => {
            const { data } = await api<Images>(
                "/movie/popular?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&page=1"
            );

            setMoviePictures(data);
        };

        getConfig();
        getTrending();
    }, []);

    useEffect(() => {
        if (!config || !moviePictures) return;

        // Config
        const configUrl = config["images"]["base_url"];
        const configSize = config["images"]["backdrop_sizes"][3];

        setSrc(
            moviePictures["results"].map(
                (m) => configUrl + configSize + m["backdrop_path"]
            )
        );
    }, [config, moviePictures]);

    useEffect(() => {
        if (!moviePictures) return;

        setInterval(() => {
            setImageIndex(
                (prev) => (prev + 1) % moviePictures["results"].length
            );
        }, 10000);
    }, [moviePictures]);

    if (!config || !moviePictures) {
        return <div>Loading...</div>;
    }

    return (
        <div
            className="backgroundSearchImage"
            style={{ backgroundImage: `url(${src[imageIndex]})` }}
        >
            <Header></Header>
            <SearchBar></SearchBar>
        </div>
    );
};

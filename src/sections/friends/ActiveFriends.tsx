/* eslint-disable react-hooks/exhaustive-deps */
import { ImagePoster } from "components/ImagePoster";
import React, { useEffect, useState } from "react";
import { api } from "services/axios";
import "../../css/popularMovies.css";
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

// interface Images {
//     page: number;
//     results: ImagesObject[];
//     total_pages: number;
//     total_results: number;
// }

// interface ImagesObject {
//     adult: boolean;
//     backdrop_path: string | null;
//     poster_path: string | null;
//     original_title: string;
//     release_date: string;
//     vote_average: string;
//     title: string;
// }

interface PersonFetch {
    page: number;
    results: [
        {
            adult: boolean;
            gender: number;
            id: number;
            known_for: Object[];
            known_for_department: string;
            name: string;
            popularity: number;
            profile_path: string;
        }
    ];

    total_pages: number;
    total_results: number;
}

export const ActiveFriends: React.FC<Props> = () => {
    const [personPictures, setPersonPictures] = useState<PersonFetch>();
    const [config, setConfig] = useState<Config>();
    const [src, setSrc] = useState<string[]>([]);

    // useEffect(() => {
    //     console.log(personPictures, config);
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
            const { data } = await api<PersonFetch>(
                "/person/popular?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&page=1"
            );

            setPersonPictures(data);
        };

            getConfig();
        getTrending();
    }, []);

    useEffect(() => {
        if (!config || !personPictures) return;

        // Config
            const configUrl = config["images"]["base_url"];
            const configSize = config["images"]["profile_sizes"][config["images"]["profile_sizes"].length - 1];

            setSrc(
                personPictures["results"].map(
                    (m) => configUrl + configSize + m["profile_path"]
                )
            );
        //console.log(config);
    }, [config, personPictures]);

    if (!config || !personPictures) {
        return <div>Loading...</div>;
    }

    return (
        <div className="popularMoviesSection">
            <h2>ActiveFriends</h2>
            <div className="movieHolder">
                {src.map((elem, index) => {
                    return (
                        <ImagePoster
                            imageLink={elem}
                            name={personPictures["results"][index]["name"]}    
                            key={index}                        
                        ></ImagePoster>
                    );
                })}
            </div>
        </div>
    );
};

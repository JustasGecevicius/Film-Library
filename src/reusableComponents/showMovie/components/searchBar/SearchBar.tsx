import React, { useEffect, useState } from "react";
import "../../../../css/searchBar.css";
import { fetch } from "./api";

interface Props {}

export const SearchBar: React.FC<Props> = () => {
    const [icon, setIcon] = useState<string>();

    useEffect(() => {
        const iconFetch = async () => {
            const iconLink = await fetch();
            setIcon(iconLink);
        };
        iconFetch();
    }, []);

    return icon ? (
        <div className="search">
            <form action="#" className="searchForm">
                <input type="text" placeholder="Search" name="search"></input>
                <button>
                    <img
                        alt="exploreIcon"
                        src={icon}
                        className="navigationImage"
                    ></img>
                </button>
            </form>
        </div>
    ) : null;
};

import React from "react";
import "../css/searchBar.css";

interface Props {}

export const SearchBar: React.FC<Props> = () => {
    return <div className="search">
    <form action="#" className="searchForm">
        <input type="text"
            placeholder=" Search Movies"
            name="search"></input>
        <button>
            <img alt="exploreIcon" src="exploreIcon.png" className="navigationImage"></img>
        </button>
    </form>
</div>
};

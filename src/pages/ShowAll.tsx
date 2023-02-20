import { SearchAreaMoviesSeries } from "features/searchArea/components/searchMoviesSeries/SearchAreaMoviesSeries";
import { PosterDisplayAllPopular } from "features/viewAllPostersSection/components/PosterDisplayAllPopular";
import { PosterDisplayAllTop } from "features/viewAllPostersSection/components/PosterDisplayAllTop";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "pages/css/showAll.css"
import { PosterDisplayAllRecommended } from "features/viewAllPostersSection/components/PosterDisplayAllRecommended";

interface Params{
  section : "Top Rated" | "Popular" | "Recommended" | undefined,
  type: "movie" | "series" | undefined
  id? : number
}

export const ShowAll = () => {

  const [pageNumber, setPageNumber] = useState(1);
  const {section, type, id} = useParams<keyof Params>() as Params;

    return (<div className="showAll">
      <SearchAreaMoviesSeries/>
      <div className="posterDisplayAllWrapper">
        <h2 className="sectionName">{`${section} ${type === "movie" ? "movies" : "series"}`}</h2>
        {section === "Popular" && type && <PosterDisplayAllPopular type={type} page={pageNumber}/>}
        {section === "Top Rated" && type && id && <PosterDisplayAllTop type={type} page={pageNumber}/>}
        {section === "Recommended" && type && <PosterDisplayAllRecommended type={type} page={pageNumber} id={id}/>}
        
        <button className="moreMovies" onClick={() => {
          setPageNumber(prev => prev + 1);
        }}>More</button>
      </div>
    </div>);
}
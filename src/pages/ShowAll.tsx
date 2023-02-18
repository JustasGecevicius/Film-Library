import { SearchAreaMoviesSeries } from "features/searchArea/components/searchMoviesSeries/SearchAreaMoviesSeries";
import { PosterDisplayAllPopular } from "features/viewAllPostersSection/components/PosterDisplayAllPopular";
import { PosterDisplayAllTop } from "features/viewAllPostersSection/components/PosterDisplayAllTop";
import { useState } from "react";
import { useParams } from "react-router-dom";

interface Paramse{
  section : "Top Rated" | "Popular" | undefined,
  type: "movie" | "series" | undefined
}

export const ShowAll = () => {

  const [pageNumber, setPageNumber] = useState(1);
  const {section, type} = useParams<keyof Paramse>() as Paramse;


    return (<div className="showAll">
      <SearchAreaMoviesSeries/>
      <h2 className="sectionName">{section}</h2>
      {section === "Popular" && type ? <PosterDisplayAllPopular type={type} page={pageNumber}/> : null}
      {section === "Top Rated" && type ? <PosterDisplayAllTop type={type} page={pageNumber}/> : null}
      
      <button className="moreMovies" onClick={() => {
        setPageNumber(prev => prev + 1);
      }}>More</button>
    </div>);
}
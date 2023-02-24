import { SearchAreaMoviesSeries } from "features/searchArea/components/searchMoviesSeries/SearchAreaMoviesSeries";
import { PosterDisplayAllPopular } from "features/displayAllPostersSection/components/PosterDisplayAllPopular";
import { PosterDisplayAllTop } from "features/displayAllPostersSection/components/PosterDisplayAllTop";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "pages/css/showAll.css";
import { PosterDisplayAllRecommended } from "features/displayAllPostersSection/components/PosterDisplayAllRecommended";
import { PosterDisplayAllCredits } from "features/displayAllPostersSection/components/PosterDisplayAllCredits";
import { useSearchAreaImages } from "features/searchArea/hooks";

interface Params {
  section: "Top Rated" | "Popular" | "Recommended" | "Credits" | undefined;
  type: "movie" | "series" | undefined;
  id?: number;
}

export const ShowAll = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const links = useSearchAreaImages();
  const { section, type, id } = useParams<keyof Params>() as Params;

  return (
    <div className="showAll">
      <SearchAreaMoviesSeries links={links} />
      <div className="posterDisplayAllWrapper">
        <h2 className="sectionName">{`${section} ${
          type === "movie" ? "movies" : "series"
        }`}</h2>
        {section === "Popular" && type && (
          <PosterDisplayAllPopular type={type} page={pageNumber} />
        )}
        {section === "Top Rated" && type && id && (
          <PosterDisplayAllTop type={type} page={pageNumber} />
        )}
        {section === "Recommended" && type && (
          <PosterDisplayAllRecommended type={type} page={pageNumber} id={id} />
        )}
        {section === "Credits" && type && (
          <PosterDisplayAllCredits type={type} id={id} page={pageNumber} />
        )}

        <button
          className="moreMovies"
          onClick={() => {
            setPageNumber((prev) => prev + 1);
          }}
        >
          More
        </button>
      </div>
    </div>
  );
};

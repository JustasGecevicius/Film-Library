import { SearchAreaMoviesSeries } from "features/searchArea/components/searchMoviesSeries/SearchAreaMoviesSeries";
import { useParams } from "react-router-dom";
import "pages/css/showAll.css";
import { useSearchAreaImages } from "features/searchArea/hooks";
import { PosterDisplayAllUserLikedRated } from "features/displayAllPostersSection/components/PosterDisplayAllUserLikedRated";
import { useFirebaseContext } from "features/context/FirebaseContext";
import { SearchArea } from "features/searchArea/components/SearchArea";

interface Params {
  section: "Liked" | "Rated" | undefined;
  type: "movie" | "series" | undefined;
  id?: number;
}

export const ShowAllUserLikedRated = () => {

  const links = useSearchAreaImages();
  const { type, section } = useParams<keyof Params>() as Params;
  const {darkTheme} = useFirebaseContext();
  return (
    <div className={darkTheme ? "darkTheme" : "theme"}>
      <div className="showAll">
        <SearchArea links={links} type={"movieSeries"} />
        <div className="posterDisplayAllWrapper">
          <h2 className="sectionName">{`${section} ${
            type === "movie" ? "Movies" : "Series"
          }`}</h2>
          <PosterDisplayAllUserLikedRated type={type} section={section}/>
        </div>
      </div>
    </div>
  );
};
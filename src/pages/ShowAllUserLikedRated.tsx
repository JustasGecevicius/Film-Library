import { SearchAreaMoviesSeries } from "features/searchArea/components/searchMoviesSeries/SearchAreaMoviesSeries";
import { PosterDisplayAllPopular } from "features/displayAllPostersSection/components/PosterDisplayAllPopular";
import { PosterDisplayAllTop } from "features/displayAllPostersSection/components/PosterDisplayAllTop";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "pages/css/showAll.css";
import { PosterDisplayAllRecommended } from "features/displayAllPostersSection/components/PosterDisplayAllRecommended";
import { PosterDisplayAllCredits } from "features/displayAllPostersSection/components/PosterDisplayAllCredits";
import { useSearchAreaImages } from "features/searchArea/hooks";
import { PosterDisplayAllFriendLikedPeople } from "features/displayAllPostersSection/components/PosterDisplayAllFriendLikedPeople";
import { PosterDisplayAllFriendLiked } from "features/displayAllPostersSection/components/PosterDisplayAllFriendLiked";
import { PosterDisplayAllFriendRated } from "features/displayAllPostersSection/components/PosterDisplayAllFriendRated";
import { PosterDisplayAllUserLikedRated } from "features/displayAllPostersSection/components/PosterDisplayAllUserLikedRated";

interface Params {
  section: "Liked" | "Rated" | undefined;
  type: "movie" | "series" | undefined;
  id?: number;
}

export const ShowAllUserLikedRated = () => {

  const links = useSearchAreaImages();
  const { type, section } = useParams<keyof Params>() as Params;
  return (
    <div className="showAll">
      <SearchAreaMoviesSeries links={links} />
      <div className="posterDisplayAllWrapper">
        <h2 className="sectionName">{`${section} ${
          type === "movie" ? "Movies" : "Series"
        }`}</h2>
        <PosterDisplayAllUserLikedRated type={type} section={section}/>
      </div>
    </div>
  );
};
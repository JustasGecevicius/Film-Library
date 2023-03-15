import { useState } from "react";
import { useParams } from "react-router-dom";
import "pages/css/showAll.css";

import { SearchAreaPeople } from "features/searchArea/components/searchPeople/SearchAreaPeople";
import { PosterDisplayAllPopularPeople } from "features/displayAllPostersSection/components/PosterDisplayAllPopularPeople";
import { PosterDisplayAllFriendLikedPeople } from "features/displayAllPostersSection/components/PosterDisplayAllFriendLikedPeople";
import { PosterDisplayAllCast } from "features/displayAllPostersSection/components/PosterDisplayAllCast";
import { useFirebaseContext } from "features/context/FirebaseContext";

interface Params {
  section: "Popular" | "FriendLiked" | "Cast";
}

export const ShowAllPeople = () => {

const sectionNames = {
  "Popular" : "Popular People",
  "FriendLiked" : "Friend Suggestions",
  "Cast" : "Cast"
}

  const [pageNumber, setPageNumber] = useState(1);


  const { section } = useParams<keyof Params>() as Params;
  const {darkTheme} = useFirebaseContext();

  return (
    <div className={darkTheme ?  "darkTheme" : "theme"}>
      <div className="showAll">
        <SearchAreaPeople />
        <div className="posterDisplayAllWrapper">
          <h2 className="sectionName">
            {sectionNames[section]}
          </h2>
          {section === "Popular" && (
            <PosterDisplayAllPopularPeople page={pageNumber} />
          )}
          {section === "FriendLiked" && <PosterDisplayAllFriendLikedPeople />}
          {section === "Cast" && <PosterDisplayAllCast />}
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
    </div>
  );
};

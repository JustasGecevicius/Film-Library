import { useState } from "react";
import { useParams } from "react-router-dom";
import './css/showAll.css';

import { PosterDisplayAllPopularPeople } from '../features/displayAllPostersSection/components/PosterDisplayAllPopularPeople';
import { PosterDisplayAllFriendLikedPeople } from '../features/displayAllPostersSection/components/PosterDisplayAllFriendLikedPeople';
import { PosterDisplayAllCast } from '../features/displayAllPostersSection/components/PosterDisplayAllCast';
import { useFirebaseContext } from '../features/context/FirebaseContext';
import { SearchArea } from '../features/searchArea/components/SearchArea';
import { useSearchAreaImages } from '../features/searchArea/hooks';

interface Params {
  section: "Popular" | "FriendLiked" | "Cast";
}

export const 
ShowAllPeople = () => {

const sectionNames = {
  "Popular" : "Popular People",
  "FriendLiked" : "Friend Suggestions",
  "Cast" : "Cast"
}

  const [pageNumber, setPageNumber] = useState(1);

  const links = useSearchAreaImages();
  const { section } = useParams<keyof Params>() as Params;
  const { darkTheme } = useFirebaseContext();

  console.log(section);

  return (
    <div className={darkTheme ?  "darkTheme" : "theme"}>
      <div className="showAll">
        <SearchArea links={links} type={"people"}  />
        <div className="posterDisplayAllWrapper">
          <h2 className="sectionName">
            {sectionNames[section]}
          </h2>
          {section === "Popular" && (
            <PosterDisplayAllPopularPeople page={pageNumber} />
          )}
          {section === "FriendLiked" && <PosterDisplayAllFriendLikedPeople page={pageNumber}/>}
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

import { useFirebaseContext } from "features/context/FirebaseContext";
import { PosterDisplayMoviesSeries } from "features/displayPostersSection/components/PosterDisplayMoviesSeries";
import { Header } from "features/header/components/Header";
import { Backdrop } from "features/profile/backdrop/Backdrop";
import {
  useUserInfo,
  useUserLiked,
  useUserRated,
} from "features/profile/hooks";
import { useSearchAreaImages } from "features/searchArea/hooks";
import "features/profile/css/backdrop.css";

export const UserProfile = () => {
  const { userInfo, db } = useFirebaseContext();
  const userNumbers = useUserInfo(userInfo, db);
  const links = useSearchAreaImages();
  const userLikedMovies = useUserLiked("movie");
  const userLikedSeries = useUserLiked("series");
  const userRatedMovies = useUserRated("movie");
  const userRatedSeries = useUserRated("series");

  return (
    <>
      {userNumbers &&
        links &&
        userLikedMovies &&
        userLikedSeries &&
        userRatedMovies &&
        userRatedSeries && (
          <>
            <div className="userProfile">
              <Backdrop
                links={links}
                profileImage={userInfo?.profileURL}
                userName={userInfo?.displayName}
                userNumbers={userNumbers}
              />
              {/* {userLikedMovies && userLikedMovies.length !== 0 && (
                <PosterDisplayMoviesSeries
                  arr={userLikedMovies}
                  sectionName={"Liked Movies"}
                  type={"movie"}
                />
              )}
              {userLikedSeries && userLikedSeries.length !== 0 && (
                <PosterDisplayMoviesSeries
                  arr={userLikedSeries}
                  sectionName={"Liked Series"}
                  type={"series"}
                />
              )}
              {userRatedMovies && userRatedMovies.length !== 0 && (
                <PosterDisplayMoviesSeries
                  arr={userRatedMovies}
                  sectionName={"Rated Movies"}
                  type={"movie"}
                />
              )}
              {userRatedSeries && userRatedSeries.length !== 0 && (
                <PosterDisplayMoviesSeries
                  arr={userRatedSeries}
                  sectionName={"Rated Series"}
                  type={"series"}
                />
              )} */}
            </div>
          </>
        )}
    </>
  );
};

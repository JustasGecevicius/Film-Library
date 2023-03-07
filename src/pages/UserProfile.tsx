import { useFirebaseContext } from "features/context/FirebaseContext";
import { Backdrop } from "features/profile/backdrop/Backdrop";
import {
  useUserInfo,
  useUserLiked,
  useUserRated,
} from "features/profile/hooks";
import { useSearchAreaImages } from "features/searchArea/hooks";
import "features/profile/css/backdrop.css";
import "pages/css/userProfile.css";
import { PosterDisplayMoviesSeries } from "features/displayPostersSection/components/PosterDisplayMoviesSeries";

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
              <div className="posterDisplaysWrapper">
              <h2 className="typeName">Liked</h2>
                {userLikedMovies && userLikedMovies.length !== 0 && (
                  <PosterDisplayMoviesSeries
                    arr={userLikedMovies}
                    sectionName={"Movies"}
                    type={"movie"}
                    link="User/movie/Liked"
                  />
                )}
                {userLikedSeries && userLikedSeries.length !== 0 && (
                  <PosterDisplayMoviesSeries
                    arr={userLikedSeries}
                    sectionName={"Series"}
                    type={"series"}
                    link="User/series/Liked"
                  />
                )}
                <h2 className="typeName">Rated</h2>
                {userRatedMovies && userRatedMovies.length !== 0 && (
                  <PosterDisplayMoviesSeries
                    arr={userRatedMovies}
                    sectionName={"Movies"}
                    type={"movie"}
                    link="User/movie/Rated"
                  />
                )}
                {userRatedSeries && userRatedSeries.length !== 0 && (
                  <PosterDisplayMoviesSeries
                    arr={userRatedSeries}
                    sectionName={"Series"}
                    type={"series"}
                    link="User/series/Rated"
                  />
                )}
              </div>
            </div>
          </>
        )}
    </>
  );
};

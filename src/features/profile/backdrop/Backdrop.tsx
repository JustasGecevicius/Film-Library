// Components
import { Header } from "features/header/components/Header";
// Styles
import "features/searchArea/css/searchArea.css";
import { useBackground } from "features/welcomeScreen/hooks";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { checkIfImageExists } from "features/header/functions";

export interface Props {
  links: string[];
  profileImage: string | undefined;
  userName: string | undefined;
  userNumbers: {
    averageMovieRating: number | undefined;
    averageSeriesRating: number | undefined;
    numberOfLikedMovies: number | undefined;
    numberOfLikedSeries: number | undefined;
  };
}

export const Backdrop = ({
  links,
  profileImage,
  userName,
  userNumbers,
}: Props) => {
  const background = useBackground();

  if (!links) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profileBackdrop">
      <div
        className="userProfileBackdrop"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="userStatsDiv">
        <Header />
        <div className="profileWrapper">
          {profileImage && checkIfImageExists(profileImage) && (
            <div className="userImage">
              <img src={profileImage} alt="userImage" className="userImage" />
            </div>
          )}
          <div className="userStats">
            <h3 className="userName">{userName}</h3>
            <div className="userStatsNumbers">
              <div className="progressBarWrap">
                <CircularProgressbar
                  value={
                    userNumbers.averageMovieRating
                      ? userNumbers.averageMovieRating
                      : 0
                  }
                  minValue={0}
                  maxValue={10}
                  text={`${userNumbers.averageMovieRating}`}
                  strokeWidth={15}
                />
                <p className="progressBarText">Average Movie Rating</p>
              </div>
              <div className="progressBarWrap">
                <CircularProgressbar
                  value={
                    userNumbers.averageSeriesRating
                      ? userNumbers.averageSeriesRating
                      : 0
                  }
                  minValue={0}
                  maxValue={10}
                  text={`${userNumbers.averageSeriesRating}`}
                  strokeWidth={15}
                />
                <p className="progressBarText">Average Series Rating</p>
              </div>
              <div className="progressBarWrap">
                <CircularProgressbar
                  value={
                    userNumbers.numberOfLikedMovies
                      ? userNumbers.numberOfLikedMovies
                      : 0
                  }
                  minValue={0}
                  maxValue={
                    userNumbers.numberOfLikedMovies
                      ? userNumbers.numberOfLikedMovies * 2
                      : 10
                  }
                  text={`${userNumbers.numberOfLikedMovies}`}
                  strokeWidth={15}
                />
                <p className="progressBarText">Movies Liked</p>
              </div>
              <div className="progressBarWrap">
                <CircularProgressbar
                  value={
                    userNumbers.numberOfLikedSeries
                      ? userNumbers.numberOfLikedSeries
                      : 0
                  }
                  minValue={0}
                  maxValue={
                    userNumbers.numberOfLikedSeries
                      ? userNumbers.numberOfLikedSeries * 2
                      : 10
                  }
                  text={`${userNumbers.numberOfLikedSeries}`}
                  strokeWidth={15}
                />
                <p className="progressBarText">Series Liked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

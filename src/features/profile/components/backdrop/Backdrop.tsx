import { Header } from '../../../header/components/Header';
import '../../../searchArea/css/searchArea.css';
import { useBackground } from '../../../welcomeScreen/hooks';
import 'react-circular-progressbar/dist/styles.css';
import { checkIfImageExists } from '../../../header/functions';
import {
  CircularProgressBarAverages,
  CircularProgressBarNumbers,
} from './CircularProgressBars';

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

export const Backdrop = ({ links, profileImage, userName, userNumbers }: Props) => {
  const background = useBackground();

  if (!links) {
    return <div>Loading...</div>;
  }

  return (
    <div className='profileBackdrop' style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div className='profileWrapper'>
        {profileImage && checkIfImageExists(profileImage) && (
          <div className='userImage'>
            <img src={profileImage} alt='userImage' className='userImage' />
          </div>
        )}
        <div className='userStats'>
          <h3 className='userName'>{userName}</h3>
          <div className='userStatsNumbers'>
            <CircularProgressBarAverages
              average={userNumbers.averageMovieRating}
              text='Average Movie Rating'
            />
            <CircularProgressBarAverages
              average={userNumbers.averageSeriesRating}
              text='Average Series Rating'
            />
            <CircularProgressBarNumbers
              number={userNumbers.numberOfLikedMovies}
              text='Movies Liked'
            />
            <CircularProgressBarNumbers
              number={userNumbers.numberOfLikedSeries}
              text='Series Liked'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

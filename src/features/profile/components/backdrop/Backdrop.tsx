import { Header } from '../../../header/components/Header';
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
    <div className='' style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div className='mx-auto p-8'>
        <div className='relative flex-row gap-x-6 max-w-4xl mx-auto p-8 items-center darker-background'>
          {profileImage && checkIfImageExists(profileImage) && (
            <img src={profileImage} alt='userImage' className='rounded-full' />
          )}
          <div className='flex-row gap-x-4 gap-y-6 justify-around grow flex-wrap'>
            <h3 className='font-bold text-wrap flex items-center text-white text-3xl'>
              {userName}
            </h3>
            <div className='flex-row gap-x-2'>
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
    </div>
  );
};

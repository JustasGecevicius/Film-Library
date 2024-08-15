import { Header } from '../../../header/components/Header';
import { useBackground } from '../../../welcomeScreen/hooks';
import 'react-circular-progressbar/dist/styles.css';
import { checkIfImageExists } from '../../../header/functions';
import {
  CircularProgressBarAverages,
  CircularProgressBarNumbers,
} from './CircularProgressBars';
import { DarkBackground } from '../../../utils/DarkBackground';

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
    <div style={{ backgroundImage: `url(${background})` }} className='relative'>
      <Header />
      <DarkBackground />
      <div className='relative p-8 mx-auto'>
        <div className='relative flex-row items-center max-w-4xl p-8 mx-auto gap-x-6 darker-background'>
          {profileImage && checkIfImageExists(profileImage) && (
            <img src={profileImage} alt='userImage' className='rounded-full' />
          )}
          <div className='flex-row flex-wrap justify-around gap-x-4 gap-y-6 grow'>
            <h3 className='flex items-center text-3xl font-bold text-white text-wrap'>
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

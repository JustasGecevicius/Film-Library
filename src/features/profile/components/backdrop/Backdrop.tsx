import { Header } from '../../../header/components/Header';
import 'react-circular-progressbar/dist/styles.css';
import {
  CircularProgressBarAverages,
  CircularProgressBarNumbers,
} from './CircularProgressBars';
import { useState } from 'react';

export interface Props {
  profileImage: string | undefined;
  userName: string | undefined;
  userNumbers: {
    averageMovieRating: number | undefined;
    averageSeriesRating: number | undefined;
    numberOfLikedMovies: number | undefined;
    numberOfLikedSeries: number | undefined;
  };
}

export const Backdrop = ({ profileImage, userName, userNumbers }: Props) => {
  const [profileImageFailed, setProfileImageFailed] = useState(false);
  const initials = userName
    ?.split(' ')
    .map((name) => name[0])
    .slice(0, 2)
    .join('');

  return (
    <section
      style={{ backgroundImage: `url(/Film-Library/background.avif)` }}
      className='relative overflow-hidden text-white bg-center bg-no-repeat bg-cover'
    >
      <div className='absolute inset-0 bg-black/60' />
      <Header />

      <div className='relative z-10 w-full max-w-6xl px-4 pt-4 pb-10 mx-auto sm:pb-14'>
        <div className='flex flex-col items-center gap-8 p-6 border shadow-2xl rounded-3xl border-white/20 bg-black/75 backdrop-blur-xl md:p-10 lg:flex-row'>
          <div className='flex flex-col items-center flex-1 gap-5 text-center sm:flex-row sm:text-left'>
            <div className='flex items-center justify-center w-24 h-24 overflow-hidden text-3xl font-bold border rounded-full shadow-xl shrink-0 border-white/40 bg-white/10'>
              {profileImage && !profileImageFailed ? (
                <img
                  src={profileImage}
                  alt={`${userName || 'User'} profile`}
                  className='object-cover w-full h-full'
                  onError={() => setProfileImageFailed(true)}
                />
              ) : (
                initials || 'U'
              )}
            </div>

            <div>
              <p className='mb-2 text-xs font-bold tracking-widest uppercase text-white/60'>
                Your profile
              </p>
              <h1 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
                {userName}
              </h1>
            </div>
          </div>

          <div className='grid w-full grid-cols-2 gap-4 pt-8 border-t border-white/20 sm:grid-cols-4 lg:w-auto lg:pt-0 lg:pl-8 lg:border-t-0 lg:border-l'>
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
    </section>
  );
};

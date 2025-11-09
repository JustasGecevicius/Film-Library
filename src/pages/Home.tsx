import { useBackground, useDisplayName } from '../features/welcomeScreen/hooks';
import { Header } from '../features/header/components/Header';
import { useEffect } from 'react';
import axios from 'axios';
import { DarkBackground } from '../features/utils/DarkBackground';

export default function Home() {
  const background = useBackground();
  const displayName = useDisplayName();

  return background ? (
    <div
      className='w-screen h-screen px-8'
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header />
      <DarkBackground />
      {displayName ? (
        <h3 className='relative p-6 mx-auto font-bold text-center text-white rounded-lg text-8xl darker-background transform-v-center'>
          Welcome back
          <br />
          {displayName}
        </h3>
      ) : (
        <h2 className='relative p-6 mx-auto font-bold text-center text-white rounded-lg text-8xl darker-background transform-v-center w-fit'>
          Discover
        </h2>
      )}
    </div>
  ) : null;
}
